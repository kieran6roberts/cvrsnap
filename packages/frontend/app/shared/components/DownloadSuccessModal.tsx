import { Modal, Stack, Button, Flex, Text, Divider } from '@mantine/core';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Check } from 'iconoir-react';

import { GitHubStarButton } from '~/shared/components/GitHubStarButton';
import { SITE_NAME } from '~/config/consts';

export function DownloadSuccessModal({ close }: { close: () => void }) {
  useEffect(() => {
    requestAnimationFrame(() => {
      toast.success('Image saved successfully.', {
        icon: <Check width={24} height={24} color="var(--mantine-primary-color-8)" />,
        id: 'download-success',
        duration: 2000
      });
    });
  }, []);

  return (
    <Modal opened onClose={close} centered title={`Thanks for using ${SITE_NAME}!`}>
      <Stack>
        <Divider />
        <Text mb="md">
          If you have any feedback, feel free to create a GiHub issue and consider leaving a star if you like the app.
        </Text>

        <Flex justify="center" align="center" gap="md">
          <GitHubStarButton size="sm" variant="outline" />
          <Button size="sm" variant="filled" darkHidden onClick={close}>
            Keep building
          </Button>
          <Button size="sm" variant="white" lightHidden onClick={close}>
            Keep building
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
}
