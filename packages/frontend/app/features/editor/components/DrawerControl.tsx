/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { ActionIcon, createPolymorphicComponent } from '@mantine/core';
import type { ActionIconProps } from '@mantine/core';

interface DrawerControlProps extends ActionIconProps {
  children: React.ReactNode;
  value: string;
  label: string;
  isActive: boolean;
}

export const DrawerControl = createPolymorphicComponent<'button', DrawerControlProps>(
  forwardRef<HTMLButtonElement, DrawerControlProps>(({ children, isActive, label, value, ...props }, ref) => {
    return (
      <ActionIcon
        ref={ref}
        variant={isActive ? 'light' : 'subtle'}
        value={value}
        radius="xl"
        size="xl"
        style={{
          justifyContent: 'center'
        }}
        aria-label={label}
        {...props}
      >
        {children}
      </ActionIcon>
    );
  })
);
