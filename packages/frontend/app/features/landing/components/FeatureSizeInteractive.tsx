import { useState } from 'react';
import { CoverImageSize } from '~/shared/components/CoverImageSize';
import { DownloadSizeInfo } from '~/shared/consts';
import { getAspectRatioData } from '~/shared/utils/styles';

export function FeatureSizeInteractive() {
  const [imageSize, setImageSize] = useState('hashnode:1.9:1600x840');

  const onAspectRatioChange = (value: DownloadSizeInfo | null) => {
    if (!value) return;
    const { id, aspectRatio, width, height } = getAspectRatioData(value);
    setImageSize(`${id}:${aspectRatio}:${width}x${height}`);
  };

  return (
    <CoverImageSize
      defaultImageSize={imageSize}
      onAspectRatioChange={(value) => onAspectRatioChange(value as DownloadSizeInfo | null)}
      width="100%"
      size="sm"
    />
  );
}
