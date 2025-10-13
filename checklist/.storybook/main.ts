// .storybook/main.ts
const config = {
  stories: ['../src/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/svelte',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
};

export default config;
