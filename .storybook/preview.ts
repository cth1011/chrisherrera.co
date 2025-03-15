import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import "../globals.css"
import { darkMode } from "../tailwind.config";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'body'
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        
      },
    }
  },
};

export default preview;
