import { ColorInput } from '@mantine/core';
import { useState } from 'react';
import { RGBAColor } from '~/shared/consts';

const DEFAULT_BG_COLOR = 'rgba(255, 255, 255, 1)';

const getInitialBgColor = () => {
  const bgColor = window.localStorage.getItem('bgColor');
  const parsedBgColor = bgColor ? JSON.parse(bgColor) : DEFAULT_BG_COLOR;

  if (parsedBgColor && typeof parsedBgColor === 'string') {
    return parsedBgColor;
  }
  return DEFAULT_BG_COLOR;
};

export function FeatureSaveProgressInteractive() {
  const [bgColor, setBgColor] = useState<string>(getInitialBgColor());

  const handleBgColorChange = (value: RGBAColor) => {
    setBgColor(value);
    try {
      window.localStorage.setItem('bgColor', JSON.stringify(value));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {}
  };

  return (
    <>
      <ColorInput
        format="rgba"
        defaultValue={bgColor}
        onChangeEnd={(value) => handleBgColorChange(value as RGBAColor)}
        aria-label="Test color picker"
        eyeDropperButtonProps={{
          'aria-label': 'Test color picker dropper'
        }}
      />
    </>
  );
}
