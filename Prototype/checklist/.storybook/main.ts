import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  addons: [
    {
      name: "@storybook/addon-svelte-csf",
      options: {
        legacyTemplate: true, // ← enable legacy API
      },
    },
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {}
  }
};

export default config;
