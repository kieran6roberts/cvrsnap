import { Select, SelectProps } from '@mantine/core';

import { IMAGE_DOWNLOAD_SIZES } from '~/shared/consts';

export function CoverImageSize({
  defaultImageSize,
  onAspectRatioChange,
  width = '275px',
  size = 'md',
  ...rest
}: {
  defaultImageSize: string;
  onAspectRatioChange: (value: string | null) => void;
  label?: string;
  width?: string;
  size?: 'sm' | 'md';
  rest?: SelectProps;
}) {
  return (
    <Select
      w={width}
      size={size}
      maw={275}
      aria-label="Cover image size"
      value={defaultImageSize}
      data={Object.values(IMAGE_DOWNLOAD_SIZES).map((size) => ({
        value: size.value,
        label: `${size.width}x${size.height} ${size.label}`
      }))}
      onChange={(value) => onAspectRatioChange(value)}
      clearable={false}
      allowDeselect={false}
      comboboxProps={{ width: '300px', position: 'bottom' }}
      checkIconPosition="right"
      maxDropdownHeight={500}
      {...rest}
    />
  );
}
