/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColorInput,
  Stack,
  FileInput,
  NumberInput,
  Button,
  Image,
  Text,
  Paper,
  SimpleGrid,
  UnstyledButton,
  Center,
  Fieldset,
  Divider
} from '@mantine/core';
import { MediaImageFolder, Check } from 'iconoir-react';
import * as patterns from 'hero-patterns';
import { useDebouncedCallback } from '@mantine/hooks';

import { useEditor } from '~/shared/stores/EditorContext';
import { updateCSSVariables } from '~/shared/utils/styles';
import classes from '~/features/editor/styles/BackgroundSection.module.css';
import {
  decimalToPercentage,
  splitAndCapitalizeCamelCase,
  updateGradientDirection,
  extractGradientDirectionNumber
} from '~/features/editor/utils';
import { BACKGROUND_TEMPLATES } from '../consts/templates';
import { RGBAColor, HEXColor } from '~/shared/consts';
import { DrawerScrollArea } from '~/features/editor/components/DrawerScrollArea';
import { SectionHeader } from '~/features/editor/components/SectionHeader';
import { SettingsTabs } from '~/features/editor/components/SettingsTabs';
import backgroundSettingsClasses from '~/features/editor/styles/BackgroundSettings.module.css';
import { GradientPicker } from '~/features/editor/components/GradientPicker';

export function BackgroundSettings() {
  const {
    template,
    background: {
      image: backgroundImage,
      colors: backgroundColors,
      pattern: backgroundPattern,
      gradients: backgroundGradients
    },
    updateBackground,
    isResettingImage
  } = useEditor();

  const getTemplateNumPaths = (templateId: string) => {
    const template = BACKGROUND_TEMPLATES.find((t) => t.id === templateId);
    return template?.sections?.length ?? 0;
  };

  const isMin3BackgroundTemplate = getTemplateNumPaths(template.backgroundId) >= 2;
  const isMin4BackgroundTemplate = getTemplateNumPaths(template.backgroundId) >= 3;

  const isSolidTemplate = template.backgroundId === 'solid';

  const onBackgroundImageChange = (file: File | null) => {
    // Revoke old image if it's a blob
    if (backgroundImage?.startsWith('blob:')) {
      URL.revokeObjectURL(backgroundImage);
    }

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateBackground({ image: imageUrl });
    } else {
      updateBackground({ image: null });
      updateCSSVariables({ '--cover-color-overlay-opacity': '0%' });
    }
  };

  const onPatternChange = (name: string) => {
    if (backgroundImage) {
      onBackgroundImageChange(null);
      updateCSSVariables({ '--cover-color-overlay-opacity': '0%' });
    }
    if (name === backgroundPattern.name) {
      updateBackground({
        pattern: {
          name: null,
          url: null,
          color: backgroundPattern.color,
          opacity: backgroundPattern.opacity
        }
      });
    } else {
      updateBackground({
        pattern: {
          name,
          url: (patterns as any)[name](backgroundPattern.color, backgroundPattern.opacity),
          color: backgroundPattern.color,
          opacity: backgroundPattern.opacity
        }
      });
    }
  };

  const onGradientChange = ({ gradientStr, gradientIndex }: { gradientStr: string; gradientIndex: number }) => {
    updateBackground({
      gradients: {
        ...backgroundGradients,
        [`gradient${gradientIndex}`]: gradientStr
      }
    });
  };

  const onGradientDirectionChange = useDebouncedCallback(
    ({ direction, gradientIndex }: { direction: string; gradientIndex: number }) => {
      const updatedGradient = updateGradientDirection({
        gradientStr: backgroundGradients?.[`gradient${gradientIndex}`] ?? '',
        direction
      });
      onGradientChange({ gradientStr: updatedGradient, gradientIndex });
    },
    300
  );

  return (
    <>
      <SectionHeader />
      <SettingsTabs
        tabs={[
          {
            label: 'Patterns',
            value: 'patterns',
            content: (
              <DrawerScrollArea>
                <Fieldset disabled={!!backgroundImage}>
                  <ColorInput
                    disabled={!!backgroundImage}
                    format="hex"
                    label="Pattern color"
                    description="Accepts HEX"
                    value={backgroundPattern.color}
                    onChangeEnd={(color) =>
                      updateBackground({
                        pattern: {
                          ...backgroundPattern,
                          url: backgroundPattern.name
                            ? (patterns as any)[backgroundPattern.name](color, backgroundPattern.opacity)
                            : null,
                          color: color as HEXColor
                        }
                      })
                    }
                  />
                  <NumberInput
                    disabled={!!backgroundImage}
                    max={1}
                    min={0}
                    step={0.1}
                    value={backgroundPattern.opacity}
                    onChange={(value) =>
                      updateBackground({
                        pattern: {
                          ...backgroundPattern,
                          opacity: Number(value),
                          url: backgroundPattern.name
                            ? (patterns as any)[backgroundPattern.name](backgroundPattern.color, Number(value))
                            : null
                        }
                      })
                    }
                    label="Pattern opacity"
                    allowNegative={false}
                  />
                  <SimpleGrid cols={{ base: 1, xs: 3, md: 2 }} spacing="sm" verticalSpacing="xl" component="section">
                    {Object.entries(patterns).map(([key, value]) => {
                      const isSelected = backgroundPattern.name === key;
                      const formattedTemplateName = splitAndCapitalizeCamelCase(key);
                      return (
                        <Stack key={key} gap={4} component="article">
                          <Text
                            component="span"
                            fw={600}
                            fz={{ base: 18, sm: 12 }}
                            ta="center"
                            style={{
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden'
                            }}
                          >
                            {formattedTemplateName}
                          </Text>

                          <UnstyledButton
                            aria-label={`Toggle ${key} background pattern`}
                            data-selected={!!isSelected}
                            onClick={() => onPatternChange(key)}
                            style={{ cursor: !backgroundImage ? 'pointer' : 'not-allowed' }}
                          >
                            <Paper
                              radius="md"
                              className={classes.patternCard}
                              style={{
                                backgroundImage: value(backgroundPattern.color, 1),
                                border: isSelected
                                  ? '1px solid var(--mantine-primary-color-light-color)'
                                  : '1px solid var(--mantine-color-default-border)',
                                aspectRatio: '2.2'
                              }}
                            >
                              {isSelected && !backgroundImage && (
                                <Center className={classes['patternCard--selected']}>
                                  <Center component="span" w={40} h={40} bg="white" style={{ borderRadius: '100%' }}>
                                    <Check width={32} height={32} color="var(--mantine-color-blue-filled)" />
                                  </Center>
                                </Center>
                              )}
                            </Paper>
                          </UnstyledButton>
                        </Stack>
                      );
                    })}
                  </SimpleGrid>
                </Fieldset>
              </DrawerScrollArea>
            )
          },
          {
            label: 'Colors',
            value: 'colors',
            content: (
              <DrawerScrollArea>
                <Fieldset>
                  <ColorInput
                    key={`color1-${isResettingImage}`}
                    format="rgba"
                    label="Background color 1"
                    description="Accepts RGBA"
                    defaultValue={backgroundColors?.color1 ?? 'rgba(255, 255, 255, 1)'}
                    disabled={!!backgroundGradients?.gradient1}
                    onChangeEnd={(value) =>
                      updateBackground({ colors: { ...backgroundColors, color1: value as RGBAColor } })
                    }
                  />
                  <GradientPicker
                    gradientStr={backgroundGradients?.gradient1 ?? null}
                    updateBackground={(value) => onGradientChange({ gradientStr: value, gradientIndex: 1 })}
                    updateDirection={(value) => onGradientDirectionChange({ direction: value, gradientIndex: 1 })}
                    defaultDirection={extractGradientDirectionNumber({
                      gradientStr: backgroundGradients?.gradient1 ?? ''
                    })}
                    gradientUpdateKey={`gradient1-${isResettingImage}`}
                  />

                  {!isSolidTemplate ? (
                    <>
                      <Divider />
                      <ColorInput
                        key={`color2-${isResettingImage}`}
                        format="rgba"
                        label="Background color 2"
                        description="Accepts RGBA"
                        defaultValue={backgroundColors?.color2 ?? 'rgba(255, 255, 255, 1)'}
                        onChangeEnd={(value) =>
                          updateBackground({ colors: { ...backgroundColors, color2: value as RGBAColor } })
                        }
                        disabled={!!backgroundImage || !!backgroundGradients?.gradient2}
                      />

                      <GradientPicker
                        gradientStr={backgroundGradients?.gradient2 ?? null}
                        updateBackground={(value) => onGradientChange({ gradientStr: value, gradientIndex: 2 })}
                        updateDirection={(value) => onGradientDirectionChange({ direction: value, gradientIndex: 2 })}
                        defaultDirection={extractGradientDirectionNumber({
                          gradientStr: backgroundGradients?.gradient2 ?? ''
                        })}
                        gradientUpdateKey={`gradient2-${isResettingImage}`}
                      />
                    </>
                  ) : null}

                  {isMin3BackgroundTemplate ? (
                    <>
                      <Divider />
                      <ColorInput
                        key={`color3-${isResettingImage}`}
                        format="rgba"
                        label="Background color 3"
                        description="Accepts RGBA"
                        defaultValue={backgroundColors?.color3 ?? 'rgba(255, 255, 255, 1)'}
                        onChangeEnd={(value) =>
                          updateBackground({ colors: { ...backgroundColors, color3: value as RGBAColor } })
                        }
                        disabled={!!backgroundImage}
                      />
                      <GradientPicker
                        gradientStr={backgroundGradients?.gradient3 ?? null}
                        updateBackground={(value) => onGradientChange({ gradientStr: value, gradientIndex: 3 })}
                        updateDirection={(value) => onGradientDirectionChange({ direction: value, gradientIndex: 3 })}
                        defaultDirection={extractGradientDirectionNumber({
                          gradientStr: backgroundGradients?.gradient3 ?? ''
                        })}
                        gradientUpdateKey={`gradient3-${isResettingImage}`}
                      />
                      {isMin4BackgroundTemplate ? (
                        <>
                          <Divider />
                          <ColorInput
                            key={`color4-${isResettingImage}`}
                            format="rgba"
                            label="Background color 4"
                            description="Accepts RGBA"
                            defaultValue={backgroundColors?.color4 ?? 'rgba(255, 255, 255, 1)'}
                            onChangeEnd={(value) =>
                              updateBackground({ colors: { ...backgroundColors, color4: value as RGBAColor } })
                            }
                            disabled={!!backgroundImage}
                          />
                          <GradientPicker
                            gradientStr={backgroundGradients?.gradient4 ?? null}
                            updateBackground={(value) => onGradientChange({ gradientStr: value, gradientIndex: 4 })}
                            updateDirection={(value) =>
                              onGradientDirectionChange({ direction: value, gradientIndex: 4 })
                            }
                            defaultDirection={extractGradientDirectionNumber({
                              gradientStr: backgroundGradients?.gradient4 ?? ''
                            })}
                            gradientUpdateKey={`gradient4-${isResettingImage}`}
                          />
                        </>
                      ) : null}
                    </>
                  ) : null}
                </Fieldset>
              </DrawerScrollArea>
            )
          },
          {
            label: 'Images',
            value: 'images',
            content: (
              <Fieldset>
                <Stack px="sm">
                  <FileInput
                    clearable
                    description="Accepts PNG, JPEG, and WEBP"
                    leftSection={<MediaImageFolder width={16} height={16} />}
                    accept="image/png,image/jpeg,image/webp"
                    label="Upload background image"
                    placeholder="Click to upload"
                    onChange={onBackgroundImageChange}
                    disabled={!!backgroundImage}
                  />
                  {backgroundImage ? (
                    <>
                      <Image
                        src={backgroundImage}
                        radius="md"
                        style={{ border: '1px solid var(--mantine-color-default-border)', aspectRatio: '16/9' }}
                        alt="Background image"
                        width="100%"
                      />
                      <Button
                        lightHidden
                        variant="primary"
                        aria-label="Remove background image"
                        onClick={() => onBackgroundImageChange(null)}
                      >
                        Remove image
                      </Button>
                      <Button
                        darkHidden
                        aria-label="Remove background image"
                        onClick={() => onBackgroundImageChange(null)}
                      >
                        Remove image
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className={backgroundSettingsClasses['background-image-placeholder']}>
                        Image will appear here
                      </div>
                    </>
                  )}
                  {backgroundImage ? (
                    <NumberInput
                      defaultValue={0}
                      max={1}
                      min={0}
                      step={0.1}
                      decimalScale={1}
                      onChange={(value) => {
                        const percentage = value ? decimalToPercentage(Number(value)) : 0;
                        updateCSSVariables({ '--cover-color-overlay-opacity': `${percentage}%` });
                      }}
                      label="Overlay opacity"
                      allowNegative={false}
                    />
                  ) : null}
                </Stack>
              </Fieldset>
            )
          }
        ]}
      />
    </>
  );
}
