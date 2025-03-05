import { Stack, Text, Image } from '@mantine/core';

import { SITE_NAME } from '~/config/consts';
import welcomeImage from '~/images/welcome.webp';
import classes from '~/features/editor/styles/EditorDrawer.module.css';
import { SectionHeader } from '~/features/editor/components/SectionHeader';

export function InfoSection() {
  return (
    <>
      <SectionHeader />
      <Stack gap={32} px="md" mt={32} pb={{ base: 90, md: 16 }} className={classes['sidebar-help']}>
        <Image
          src={welcomeImage}
          radius="md"
          alt={`Welcome to ${SITE_NAME} cover`}
          w="100%"
          maw={500}
          mx="auto"
          style={{ aspectRatio: 2.38, border: '1px solid var(--mantine-color-default-border)' }}
          bg="var(--mantine-color-dark-9)"
        />
        <Text size="sm">
          Your editor state (except uploaded background images) will persist across sessions using browser storage. This
          means you can freely come and go from the app without losing your progress.
        </Text>
        <Text size="sm">
          Once you have your saved cover image, run it through an image compressor before you use it! If you have any
          suggestions for the app, share them with me using the link in the footer. Finally, If you like the app, take a
          second to star in on GitHub, thanks!
        </Text>
      </Stack>
    </>
  );
}
