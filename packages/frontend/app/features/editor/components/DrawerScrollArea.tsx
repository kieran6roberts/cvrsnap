import { ScrollArea } from '@mantine/core';

export function DrawerScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea flex={1} h="calc(100vh - var(--main-header-height) - 60px - 55px)" px="sm">
      {children}
    </ScrollArea>
  );
}
