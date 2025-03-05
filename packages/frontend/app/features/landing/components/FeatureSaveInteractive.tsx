import { Button } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { Download } from 'iconoir-react';

import Confetti from '~/features/preview/components/Confetti';

export function FeatureSaveInteractive() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isConfettiActive) {
      timeout.current = setTimeout(() => setIsConfettiActive(false), 5000);
    }
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [isConfettiActive]);

  return (
    <>
      <Button
        lightHidden
        onClick={() => setIsConfettiActive(true)}
        variant="white"
        size="sm"
        rightSection={<Download width={24} height={24} />}
      >
        Save image
      </Button>
      <Button
        darkHidden
        onClick={() => setIsConfettiActive(true)}
        variant="primary"
        size="sm"
        rightSection={<Download width={24} height={24} />}
      >
        Save image
      </Button>
      {isConfettiActive && <Confetti numberOfPieces={500} recycle={false} height={500} initialVelocityX={10} />}
    </>
  );
}
