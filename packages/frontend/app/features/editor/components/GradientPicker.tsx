import { Select, Divider, Group, Flex, Box, SelectProps } from '@mantine/core';
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
  updateBackground
}: {
  gradientStr: string | null;
  updateBackground: (gradientString: string) => void;
}) {
  return (
    <>
      <Divider label="Alternatively:" labelPosition="left" />

      <Select
        data={GRADIENT_PRESETS.map((preset) => {
          const gradientString = constructGradientString({
            type: preset.value.type,
            direction: '90deg',
            colors: preset.value.colors
          });

          return {
            label: preset.name,
            value: gradientString
          };
        })}
        searchable
        allowDeselect={false}
        clearable
        clearButtonProps={{
          onClick: () => {
            updateBackground('');
          },
          'aria-label': 'Clear gradient'
        }}
        placeholder="Select a gradient"
        description="Pick a preset CSS linear-gradient"
        defaultValue={gradientStr ?? null}
        renderOption={renderSelectOption}
        onChange={(value) => {
          if (!value) {
            return;
          }
          updateBackground(value);
        }}
      />
    </>
  );
}
