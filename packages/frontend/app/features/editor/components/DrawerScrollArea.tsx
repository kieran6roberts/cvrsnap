import { Box, ScrollArea } from '@mantine/core';
import classes from '~/features/editor/styles/DrawerScrollArea.module.css';

export function DrawerScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollArea visibleFrom="md" scrollbarSize={8} className={classes.scrollArea}>
        {children}
      </ScrollArea>
      <Box hiddenFrom="md">{children}</Box>
    </>
  );
}
