import { Select, Divider, Group, Flex, Box, SelectProps, NumberInput } from '@mantine/core';
import { Check } from 'iconoir-react';

import { GRADIENT_PRESETS } from '~/features/editor/consts';
import { constructGradientString } from '~/features/editor/utils';

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs" justify="space-between">
    <Flex align="center" gap="xs">
      <Box h={32} w={32} bg={option.value} style={{ borderRadius: '4px' }} />
      {option.label}
    </Flex>
    {checked && <Check />}
  </Group>
);

export function GradientPicker({
  gradientStr,
  updateBackground,
  updateDirection,
  defaultDirection,
  gradientUpdateKey,
  disabled
}: {
  gradientStr: string | null;
  updateBackground: (gradientStr: string) => void;
  updateDirection: (direction: string) => void;
  defaultDirection: number;
  gradientUpdateKey: string;
  disabled?: boolean;
}) {
  return (
    <>
      <Divider label="Alternatively:" labelPosition="left" />

      <Select
        key={gradientUpdateKey}
        data={GRADIENT_PRESETS.map((preset) => {
          const gradientString = constructGradientString({
            type: preset.value.type,
            direction: `${defaultDirection}deg`,
            colors: preset.value.colors
          });

          return {
            label: preset.name,
            value: gradientString
          };
        })}
        searchable
        disabled={!!disabled}
        allowDeselect={false}
        clearable
        clearButtonProps={{
          onClick: () => {
            updateBackground('');
          },
          'aria-label': 'Clear gradient'
        }}
        placeholder="Select a gradient"
        label="Pick a preset CSS linear-gradient"
        value={gradientStr ?? null}
        renderOption={renderSelectOption}
        onChange={(value) => {
          if (!value) {
            return;
          }
          updateBackground(value);
        }}
      />
      {gradientStr ? (
        <NumberInput
          label="Gradient direction (degrees)"
          disabled={!gradientStr || !!disabled}
          defaultValue={defaultDirection}
          clampBehavior="strict"
          suffix="°"
          min={0}
          max={360}
          step={1}
          onChange={(value) => {
            if (!value) {
              return;
            }
            const direction = `${value}deg`;
            updateDirection(direction);
          }}
        />
      ) : null}
    </>
  );
}
