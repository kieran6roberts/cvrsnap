import { Tabs, FloatingIndicator } from '@mantine/core';
import { useState } from 'react';
import classes from '~/features/editor/styles/SettingsTabs.module.css';

interface SettingsTabsProps {
  tabs: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[];
}

export function SettingsTabs({ tabs }: SettingsTabsProps) {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>(tabs[0].value);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.tabsList}>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value} ref={setControlRef(tab.value)} className={classes.tabItem}>
            {tab.label}
          </Tabs.Tab>
        ))}

        <FloatingIndicator target={value ? controlsRefs[value] : null} parent={rootRef} className={classes.indicator} />
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value}>
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
