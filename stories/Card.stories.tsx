import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import Card from "components/Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Card component is used to display content in a clean and organized way. It supports images, titles, descriptions, date ranges, tags, and a call-to-action button.",
      },
    },
  },
  argTypes: {
    title: {
      description: "The main heading text of the card",
      control: "text",
    },
    description: {
      description: "The body text content of the card",
      control: "text",
    },
    img: {
      description: "CSS class for the background image",
      control: "text",
    },
    from: {
      description: "Start date or time",
      control: "text",
    },
    to: {
      description: "End date or time",
      control: "text",
    },
    label: {
      description: "Text for the call-to-action button",
      control: "text",
    },
    href: {
      description: "URL the card links to",
      control: "text",
    },
    tags: {
      description: "Array of tag strings to display",
      control: "object",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Example Project",
    description:
      "This is a sample project description that demonstrates the card component with its default appearance.",
    from: "Jan 2023",
    to: "Present",
    tags: ["React", "TypeScript", "Tailwind"],
  },
};

export const NoTags: Story = {
  args: {
    title: "Project Without Tags",
    description: "This example shows how the card looks without any tags.",
    from: "Mar 2023",
    to: "Dec 2023",
  },
};

export const CustomLabel: Story = {
  args: {
    title: "Custom Button Label",
    description: "This card has a custom label on its button.",
    from: "Jun 2023",
    to: "Sep 2023",
    label: "View Project",
  },
};

export const WithInteraction: Story = {
  args: {
    title: "Interactive Card",
    description: "Click the button to test the interaction.",
    from: "Jan 2024",
    to: "Present",
    href: "/test-project",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find and click the button
    const button = canvas.getByRole("link");
    await userEvent.click(button);

    // Verify the button exists and has the correct href
    await expect(button).toHaveAttribute("href", "/test-project");
  },
};

export const LongDescription: Story = {
  args: {
    title: "Project with Long Description",
    description:
      "This is a much longer description that shows how the card handles more content. It includes multiple sentences to demonstrate text wrapping and overall card layout with larger amounts of text. The card should maintain its structure and readability even with this extended content.",
    from: "Jan 2024",
    to: "Mar 2024",
    tags: ["UI", "Design", "Development"],
  },
};
