import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Footer from 'components/Footer';

const meta = {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "The footer of the blog"
            }
        }
    },
    tags: ['autodocs']
} satisfies Meta<typeof Footer>

export default meta;
type Story = StoryObj<typeof Footer>

export const Default: Story = {
    args: {}
}