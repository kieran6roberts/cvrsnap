import { ButtonGroup, Button } from '@mantine/core';
import { ZoomIn, ZoomOut } from 'iconoir-react';
import { useEditorUIStore, type ZoomStep } from '~/shared/stores/EditorUIStore';
import { updateCSSVariables } from '~/shared/utils/styles';
import { zoomMap, MAX_ZOOM_STEP, MIN_ZOOM_STEP } from '~/features/preview/consts';

export function ZoomControl() {
  const { zoomStep, setZoomStep } = useEditorUIStore();

  const handleZoom = (direction: 'in' | 'out') => {
    const currentZoom = zoomStep;
    const newZoom = currentZoom + (direction === 'in' ? 1 : -1);

    if (newZoom >= MIN_ZOOM_STEP && newZoom <= MAX_ZOOM_STEP) {
      setZoomStep(newZoom as ZoomStep);
      updateCSSVariables({
        '--cover-zoom': `scale(${zoomMap[newZoom as keyof typeof zoomMap]})`
      });
    }
  };

  const isMaxZoom = zoomStep >= MAX_ZOOM_STEP;
  const isMinZoom = zoomStep <= MIN_ZOOM_STEP;

  return (
    <ButtonGroup>
      <Button aria-label="Zoom In" variant="default" onClick={() => handleZoom('in')} disabled={isMaxZoom}>
        <ZoomIn />
      </Button>

      <Button aria-label="Zoom Out" variant="default" onClick={() => handleZoom('out')} disabled={isMinZoom}>
        <ZoomOut />
      </Button>
    </ButtonGroup>
  );
}
