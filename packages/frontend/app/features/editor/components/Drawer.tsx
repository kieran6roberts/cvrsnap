import { Flex, Box, Tabs, Stack, Divider, Text } from '@mantine/core';
import { Text as IconText, MediaImage, AlignBottomBox, InfoCircle } from 'iconoir-react';
import React from 'react';

import classes from '~/features/editor/styles/EditorDrawer.module.css';
import { TextSettings } from '~/features/editor/components/TextSettings';
import { BackgroundSettings } from '~/features/editor/components/BackgroundSettings';
import { TemplateSettings } from '~/features/editor/components/TemplateSettings';
import { useEditor } from '~/shared/stores/EditorContext';
import { useEditorUIStore } from '~/shared/stores/EditorUIStore';
import type { OpenSection } from '~/shared/stores/EditorUIStore';
import { DrawerControl } from '~/features/editor/components/DrawerControl';
import { InfoSection } from '~/features/editor/components/InfoSection';
import { DRAWER_SECTIONS } from '~/shared/consts';
import { DrawerFooter } from '~/features/editor/components/DrawerFooter';
import { ThemeToggle } from '~/shared/components/ThemeToggle';

const editSections = [
  {
    id: DRAWER_SECTIONS.templates,
    title: 'Templates',
    color: 'grape.5',
    content: () => <TemplateSettings />,
    icon: <AlignBottomBox width={24} height={24} />
  },
  {
    id: DRAWER_SECTIONS.text,
    title: 'Text',
    color: 'orange.5',
    content: () => <TextSettings />,
    icon: <IconText width={24} height={24} />
  },
  {
    id: DRAWER_SECTIONS.background,
    title: 'Background',
    color: 'blue.5',
    content: () => <BackgroundSettings />,
    icon: <MediaImage width={24} height={24} />
  },
  {
    id: DRAWER_SECTIONS.info,
    title: 'Info',
    color: 'teal.5',
    content: () => <InfoSection />,
    icon: <InfoCircle width={24} height={24} />
  }
] as const;

export function Drawer({ imageNodeRef }: { imageNodeRef: React.RefObject<HTMLDivElement | null> }) {
  const { openSection, setOpenSection } = useEditorUIStore();
  const { resetEditor } = useEditor();

  const openSectionIndex = editSections.findIndex((section) => section.id === openSection);

  return (
    <Box component="aside" className={classes.sidebar}>
      <Tabs
        visibleFrom="md"
        variant="none"
        orientation="vertical"
        value={openSection}
        h="100%"
        onChange={(value) => setOpenSection(value as OpenSection)}
      >
        <Box className={classes['sidebar-controls-container']}>
          <ThemeToggle size="xl" />
          <Divider />
          <Tabs.List component="section" className={classes['sidebar-controls']} px={{ base: 2, md: 12 }} py={16}>
            <Stack align="center" justify="center">
              {editSections.map((section) => {
                const isActive = section.id === openSection;

                return (
                  <React.Fragment key={section.id}>
                    <DrawerControl
                      value={section.id}
                      isActive={isActive}
                      color={section.color}
                      label={section.title}
                      component={Tabs.Tab}
                    >
                      {section.icon}
                    </DrawerControl>
                    <Text size="xs" ta="center" fw={500}>
                      {section.title}
                    </Text>
                  </React.Fragment>
                );
              })}
            </Stack>
          </Tabs.List>
        </Box>

        <Tabs.Panel value={openSection}>{editSections[openSectionIndex].content()}</Tabs.Panel>
      </Tabs>
      <Flex direction="column" hiddenFrom="md" variant="none" pos="sticky" top={0}>
        <Flex direction="row" component="section" className={classes['sidebar-controls']} gap="md" p="md">
          {editSections.map((section) => {
            const isActive = section.id === openSection;

            return (
              <Stack key={section.id} align="center" justify="center">
                <DrawerControl
                  key={section.id}
                  value={section.id}
                  isActive={isActive}
                  color={section.color}
                  label={section.title}
                  component="button"
                  onClick={() => setOpenSection(section.id)}
                >
                  {section.icon}
                </DrawerControl>
                <Text size="xs" ta="center" fw={500}>
                  {section.title}
                </Text>
              </Stack>
            );
          })}
        </Flex>

        <Box flex={1} p="md">
          {editSections[openSectionIndex].content()}
        </Box>
      </Flex>
      <DrawerFooter resetEditor={resetEditor} imageNodeRef={imageNodeRef} />
    </Box>
  );
}
