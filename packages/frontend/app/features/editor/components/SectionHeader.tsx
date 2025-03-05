import { Flex, ActionIcon, Stack, Divider, Tooltip } from '@mantine/core';
import { ArrowLeftTag } from 'iconoir-react';
import { GitHubStarButton } from '~/shared/components/GitHubStarButton';
import { Logo } from '~/shared/components/Logo';
import { useEditorUIStore } from '~/shared/stores/EditorUIStore';

export function SectionHeader() {
  const { setDrawerOpen } = useEditorUIStore();
  return (
    <Stack p="sm" gap="lg" visibleFrom="md">
      <Flex justify="space-between" align="center">
        <Logo />
        <Tooltip label="Close sidebar">
          <ActionIcon
            visibleFrom="md"
            onClick={() => setDrawerOpen(false)}
            variant="default"
            size={32}
            title="Close sidebar"
            aria-label="Close sidebar"
          >
            <ArrowLeftTag width={18} height={18} />
          </ActionIcon>
        </Tooltip>
      </Flex>
      <GitHubStarButton fullWidth visibleFrom="sm" size="sm" variant="outline" />
      <Divider />
    </Stack>
  );
}
