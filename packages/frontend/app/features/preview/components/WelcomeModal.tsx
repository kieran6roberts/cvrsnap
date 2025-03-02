import { Modal, Text, Stack, Button, Image } from '@mantine/core';

import welcomeImage from '~/images/welcome.webp';
import { SITE_NAME } from '~/config/consts';

export function WelcomeModal({ isOpen, hideWelcome }: { isOpen: boolean; hideWelcome: () => void }) {
  return (
    <Modal
      centered
      opened={isOpen}
      onClose={hideWelcome}
      fz="xl"
      title={
        <Text size="xl" fw={500}>
          Hey 👋
        </Text>
      }
      size="md"
    >
      <Stack>
        <Image src={welcomeImage} radius="md" alt={`Welcome to ${SITE_NAME} cover`} width={400} height={200} />
        <Text>
          Thank you for trying {SITE_NAME}! You can save as many cover images as you like for free, and I'll be adding
          more customisation options and tools over time.
        </Text>
        <Button variant="primary" darkHidden fullWidth data-autofocus onClick={hideWelcome}>
          Start editing
        </Button>
        <Button variant="white" lightHidden fullWidth data-autofocus onClick={hideWelcome}>
          Start editing
        </Button>
      </Stack>
    </Modal>
  );
}
