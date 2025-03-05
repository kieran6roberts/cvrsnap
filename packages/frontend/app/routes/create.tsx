import { MetaFunction } from 'react-router';
import { Box } from '@mantine/core';

import { WelcomeModal } from '~/features/preview/components/WelcomeModal';
import { EditorArea } from '~/shared/layouts/EditorArea';
import { SITE_NAME } from '~/config/consts';
import { useEditorUIStore } from '~/shared/stores/EditorUIStore';
import classes from '~/shared/styles/create.module.css';
import { Navbar } from '~/shared/layouts/Navbar';

export const meta: MetaFunction = () => {
  const title = `${SITE_NAME} - Create`;
  const description = `Use ${SITE_NAME}'s easy-to-use editing tools and presets to download free cover images for your blog without the design headache.`;

  return [
    { title, description },
    {
      name: 'description',
      content: description
    }
  ];
};

export default function Create() {
  const { hasSeenWelcome, isHydrated, setHasSeenWelcome } = useEditorUIStore();
  return (
    <>
      <Box hiddenFrom="md">
        <Navbar />
      </Box>
      <Box className={classes.main}>
        <WelcomeModal isOpen={!hasSeenWelcome && isHydrated} hideWelcome={() => setHasSeenWelcome(true)} />
        <EditorArea />
      </Box>
    </>
  );
}
