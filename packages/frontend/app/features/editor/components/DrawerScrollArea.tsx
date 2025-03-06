import { ScrollArea } from '@mantine/core';
export function DrawerScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea scrollbarSize={8} flex={1} h="calc(100vh - 250px)" px="sm">
      {children}
    </ScrollArea>
  );
}
