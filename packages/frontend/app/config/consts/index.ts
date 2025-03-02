import { MantineColorScheme } from '@mantine/core';

export const GITHUB_URL = 'https://github.com/kieran6roberts/cvrsnap';
export const PORTFOLIO_URL = 'https://kieranroberts.dev';
export const DOMAIN = 'cvrsnap.com';
export const SITE_NAME = 'CvrSnap';
export const SITE_CASE_STUDY_URL = 'https://blog.kieranroberts.dev/cvrsnapcom-blog-post-cover-image-creator';

export const PREVIEW_PARAM = 'preview';
export const CREATE_ROUTE = '/create';

type AVAILABLE_THEMES = Exclude<MantineColorScheme, 'auto'>;

export const SITE_THEMES: Readonly<Record<AVAILABLE_THEMES, AVAILABLE_THEMES>> = {
  light: 'light',
  dark: 'dark'
};
