import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { DeepReadonly } from '~/shared/types';
import { updateCSSVariables } from '~/shared/utils/styles';
import { zoomMap } from '~/features/preview/consts';

export type OpenSection = 'templates' | 'text' | 'background' | 'info';
export type ZoomStep = -3 | -2 | -1 | 0 | 1 | 2 | 3;

type EditorUIState = DeepReadonly<{
  isDrawerOpen: boolean;
  openSection: OpenSection;
  hasSeenWelcome: boolean;
  isHydrated: boolean;
  zoomStep: ZoomStep;
}>;

type EditorUIActions = {
  setDrawerOpen: (isOpen: boolean) => void;
  setHasHydrated: (isHydrated: boolean) => void;
  setOpenSection: (section: OpenSection) => void;
  setHasSeenWelcome: (hasSeen: boolean) => void;
  setZoomStep: (step: ZoomStep) => void;
};

export const useEditorUIStore = create<EditorUIState & EditorUIActions>()(
  persist(
    (set) => ({
      isDrawerOpen: true,
      openSection: 'templates',
      hasSeenWelcome: false,
      isHydrated: false,
      zoomStep: 0,
      setDrawerOpen: (isOpen: boolean) => set({ isDrawerOpen: isOpen }),
      setHasHydrated: (isHydrated: boolean) => set({ isHydrated: isHydrated }),
      setOpenSection: (section: OpenSection) => set({ openSection: section }),
      setHasSeenWelcome: (hasSeen: boolean) => set({ hasSeenWelcome: hasSeen }),
      setZoomStep: (step: ZoomStep) => set({ zoomStep: step })
    }),
    {
      name: 'editor-ui-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isDrawerOpen: state.isDrawerOpen,
        openSection: state.openSection,
        hasSeenWelcome: state.hasSeenWelcome,
        zoomStep: state.zoomStep
      }),
      version: 1.1,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);

        if (state?.zoomStep) {
          updateCSSVariables({
            '--cover-zoom': `scale(${zoomMap[state.zoomStep as keyof typeof zoomMap]})`
          });
        }
      }
    }
  )
);
