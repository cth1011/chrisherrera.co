import type { Meta, StoryObj } from '@storybook/react';
import Bio from "components/Bio";

const meta = {
  title: 'Components/Bio',
  component: Bio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A biography component that displays the author\'s profile picture and introduction.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Bio>;

export default meta;
type Story = StoryObj<typeof Bio>;

export const Default: Story = {
  args: {}
};
