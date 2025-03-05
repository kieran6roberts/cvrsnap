import { ActionIcon, Center, useMantineColorScheme } from '@mantine/core';
import { SunLight, HalfMoon } from 'iconoir-react';
import { SITE_THEMES } from '~/config/consts';

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const iconSizeMap = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24
};

export function ThemeToggle({ size = 'md' }: ThemeToggleProps) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <>
      <ActionIcon
        darkHidden
        onClick={() => setColorScheme(colorScheme === SITE_THEMES.light ? SITE_THEMES.dark : SITE_THEMES.light)}
        variant="subtle"
        bg="var(--mantine-color-gray-0)"
        size={size}
        aria-label="Toggle color scheme"
      >
        <Center darkHidden h="100%" w="100%">
          <SunLight width={iconSizeMap[size]} height={iconSizeMap[size]} color="var(--mantine-color-text)" />
        </Center>
        <Center lightHidden h="100%" w="100%">
          <HalfMoon width={iconSizeMap[size]} height={iconSizeMap[size]} color="var(--mantine-color-text)" />
        </Center>
      </ActionIcon>
      <ActionIcon
        lightHidden
        bg="var(--dark-bg)"
        onClick={() => setColorScheme(colorScheme === SITE_THEMES.light ? SITE_THEMES.dark : SITE_THEMES.light)}
        variant="subtle"
        size={size}
        aria-label="Toggle color scheme"
      >
        <Center darkHidden h="100%" w="100%">
          <SunLight width={iconSizeMap[size]} height={iconSizeMap[size]} color="var(--mantine-color-text)" />
        </Center>
        <Center lightHidden h="100%" w="100%">
          <HalfMoon width={iconSizeMap[size]} height={iconSizeMap[size]} color="var(--mantine-color-text)" />
        </Center>
      </ActionIcon>
    </>
  );
}
