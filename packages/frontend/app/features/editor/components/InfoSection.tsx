import { Stack, Alert, Divider } from '@mantine/core';
import { InfoCircle } from 'iconoir-react';

import classes from '~/features/editor/styles/EditorDrawer.module.css';
import { SectionHeader } from '~/features/editor/components/SectionHeader';

export function InfoSection() {
  return (
    <>
      <SectionHeader />
      <Stack gap={32} px="sm" mt={32} pb={{ base: 90, md: 16 }} className={classes['sidebar-help']}>
        <Alert variant="transparent" p={0} color="pink" radius="md" icon={<InfoCircle />} fw={500}>
          Your editor state (except uploaded background images) will persist across sessions using browser storage. This
          means you can freely come and go from the app without losing your progress.
        </Alert>
        <Divider />
        <Alert variant="transparent" p={0} color="teal" radius="md" icon={<InfoCircle />} fw={500}>
          Once you have saved your cover image, run it through an image compressor before you use it.
        </Alert>
        <Divider />
      </Stack>
    </>
  );
}
