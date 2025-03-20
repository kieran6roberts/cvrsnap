/* eslint-disable quotes */
import { AlignBottomBox, CompressLines, DownloadCircle, Edit, Code, Group, CollageFrame } from 'iconoir-react';

import { FeatureSaveInteractive } from '~/features/landing/components/FeatureSaveInteractive';
import { FeatureTemplatesInteractive } from '~/features/landing/components/FeatureTemplatesInteractive';
import { FeatureSizeInteractive } from '~/features/landing/components/FeatureSizeInteractive';
import { FeatureSaveProgressInteractive } from '~/features/landing/components/FeatureSaveProgressInteractive';
import LandingExample1 from '~/images/landing-example-1.webp';
import LandingExample2 from '~/images/landing-example-2.webp';
import LandingExample3 from '~/images/landing-example-3.webp';
import LandingExample4 from '~/images/landing-example-4.webp';

export const FEATURES = [
  {
    title: 'Instant image save',
    copy: '1 click cover image saving. No account required, no watermarks, and completely free. Save as many images as you need.',
    icon: <DownloadCircle aria-hidden="true" width={32} height={32} color="var(--mantine-color-green-5)" />,
    renderHighlight: () => <FeatureSaveInteractive />,
    classNames: ['feature-section-small']
  },
  {
    title: 'Easy-to-use templates',
    copy: 'Pick from a set of background and text templates to get you started. Our intuitive editor makes it simple to create stunning blog covers in seconds, no design experience needed.',
    icon: <CollageFrame aria-hidden="true" width={32} height={32} color="var(--mantine-color-yellow-5)" />,
    renderHighlight: () => <FeatureTemplatesInteractive />,
    classNames: ['feature-section-large']
  },
  {
    title: 'Custom sizing',
    copy: 'Choose from a set of pre-defined sizes specifically suited to popular blogging platforms such as Medium, Dev.to, Hashnode, or even your personal blog.',
    icon: <CompressLines aria-hidden="true" width={32} height={32} color="var(--mantine-color-orange-5)" />,
    renderHighlight: () => <FeatureSizeInteractive />,
    classNames: ['feature-section-medium']
  },
  {
    title: 'An editor that saves your progress',
    copy: 'The CvrSnap editor saves your progress using browser storage. If you need to leave, you can come back later and pick up where you left off in an instant.',
    icon: <AlignBottomBox aria-hidden="true" width={32} height={32} color="var(--mantine-color-blue-5)" />,
    renderHighlight: () => <FeatureSaveProgressInteractive />,
    classNames: ['feature-section-medium']
  }
];

export const COVER_EXAMPLES = [
  {
    src: LandingExample1,
    alt: 'Example 1 - CvrSnap cover'
  },
  {
    src: LandingExample2,
    alt: 'Example 2 - CvrSnap cover'
  },
  {
    src: LandingExample3,
    alt: 'Example 3 - CvrSnap cover'
  },
  {
    src: LandingExample4,
    alt: 'Example 4 - CvrSnap cover'
  }
];
export const TARGET_CUSTOMERS = [
  {
    title: 'Bloggers',
    copy: 'Adding a cover image to your blog can help it stand out. CvrSnap makes it easy to create your ideal cover image in seconds.',
    icon: <Edit aria-hidden="true" width={32} height={32} color="var(--mantine-color-grape-5)" />
  },
  {
    title: 'Developers',
    copy: "You don't need to be a designer to create great blog cover images. Focus on your code and blog content and let CvrSnap handle cover images.",
    icon: <Code aria-hidden="true" width={32} height={32} color="var(--mantine-color-blue-5)" />
  },
  {
    title: 'Marketers',
    copy: "Marketers and developer relations professionals who regularly create content for their audience and don't have easy access to custom designs.",
    icon: <Group aria-hidden="true" width={32} height={32} color="var(--mantine-color-green-5)" />
  }
];
