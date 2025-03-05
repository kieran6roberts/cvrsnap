import { SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import { motion } from 'motion/react';
import classnames from 'classnames';

import { TemplatePreview } from '~/features/editor/components/TemplatePreview';
import { LAYOUT_TEMPLATES } from '~/features/editor/consts/templates';
import layoutClasses from '~/features/editor/styles/TemplatePreview.module.css';

export function FeatureTemplatesInteractive() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <SimpleGrid cols={{ base: 2, sm: 4 }} w="100%" spacing="xs" component="section">
      {LAYOUT_TEMPLATES.slice(0, 4).map((t) => {
        const isSelected = selectedTemplate === t.id;
        return (
          <TemplatePreview key={t.id} isSelected={isSelected} onTemplateUpdate={() => setSelectedTemplate(t.id)}>
            <motion.div className={layoutClasses['previewPaper-content']}>
              <div className={classnames(t.previewStyles.cover, layoutClasses['previewPaper-content'])}>
                <div className={classnames(layoutClasses['previewBar--wide'], t.previewStyles.primaryText ?? '')} />
                <div className={classnames(layoutClasses['previewBar--narrow'], t.previewStyles.secondaryText ?? '')} />
              </div>
            </motion.div>
          </TemplatePreview>
        );
      })}
    </SimpleGrid>
  );
}
