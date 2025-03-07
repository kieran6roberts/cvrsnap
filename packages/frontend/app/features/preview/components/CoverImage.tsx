import { Box, ActionIcon, Tooltip, Flex, Container } from '@mantine/core';
import { ArrowRightTag } from 'iconoir-react';
import { lazy } from 'react';
import classNames from 'classnames';

import { useEditor } from '~/shared/stores/EditorContext';
import classes from '~/features/preview/styles/CoverImage.module.css';
import { DownloadSuccessModal } from '~/shared/components/DownloadSuccessModal';
import { useImageDownload } from '~/shared/hooks/useImageDownload';
import { ImagePreview } from '~/features/preview/components/ImagePreview';
import { updateCSSVariables, getAspectRatioData } from '~/shared/utils/styles';
import { CoverImageControls } from '~/features/preview/components/CoverImageControls';
import { CoverImageSize } from '~/shared/components/CoverImageSize';
import { useEditorUIStore } from '~/shared/stores/EditorUIStore';
import type { DownloadSizeInfo } from '~/shared/consts';
import { Logo } from '~/shared/components/Logo';
const Confetti = lazy(() => import('~/features/preview/components/Confetti'));

export function CoverImage({ imageNodeRef }: { imageNodeRef: React.RefObject<HTMLDivElement | null> }) {
  const { resetEditor, updateCover, cover } = useEditor();
  const { isDrawerOpen, setDrawerOpen } = useEditorUIStore();

  const defaultImageSize = `${cover.id}:${cover.aspectRatio}:${cover.width}x${cover.height}`;

  const { isLoading, isSuccessModalOpen, isDownloadDisabled, closeSuccessModal, downloadImage } = useImageDownload({
    imageRef: imageNodeRef,
    cover
  });

  const resetStyles = () => {
    resetEditor();
  };

  const onAspectRatioChange = (value: DownloadSizeInfo | null) => {
    if (!value) return;
    const { id, aspectRatio, width, height } = getAspectRatioData(value);

    updateCSSVariables({ '--cover-aspect-ratio': `${aspectRatio}` });
    updateCover({ id, width, height, aspectRatio });
  };

  return (
    <Container fluid style={{ flex: 1 }}>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
        style={{ borderBottom: !isDrawerOpen ? '1px solid var(--mantine)' : 'none' }}
        p="sm"
        h={80}
      >
        <CoverImageSize
          width="220px"
          defaultImageSize={defaultImageSize}
          onAspectRatioChange={(value) => onAspectRatioChange(value as DownloadSizeInfo | null)}
        />

        <CoverImageControls
          {...(isDownloadDisabled
            ? {
                isDownloadDisabled: true
              }
            : { isLoading, resetStyles, downloadImage, isDownloadDisabled: false })}
        />
      </Flex>

      <Box className={classNames(classes.coverWrapper)}>
        {!isDrawerOpen ? (
          <Tooltip label="Open sidebar">
            <ActionIcon
              visibleFrom="md"
              pos="absolute"
              top={16}
              left={20}
              onClick={() => setDrawerOpen(true)}
              title="Open sidebar"
              variant="default"
              size={32}
              aria-label="Open sidebar"
            >
              <ArrowRightTag width={18} height={18} />
            </ActionIcon>
          </Tooltip>
        ) : null}
        {!isDrawerOpen ? (
          <Box visibleFrom="md" pos="absolute" top={16} right={20}>
            <Logo />
          </Box>
        ) : null}

        <ImagePreview imageNodeRef={imageNodeRef} />
      </Box>

      {isSuccessModalOpen && <DownloadSuccessModal close={closeSuccessModal} />}
      {isSuccessModalOpen && <Confetti />}
    </Container>
  );
}
