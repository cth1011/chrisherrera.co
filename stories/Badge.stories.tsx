import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import Badge from "components/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "A versatile badge component that supports multiple color variants and dark mode. Used to highlight status, labels, or categories in the interface.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The color variant of the badge",
      control: "select",
      options: [
        "blue",
        "dark",
        "red",
        "green",
        "yellow",
        "indigo",
        "purple",
        "pink",
      ],
      defaultValue: "blue",
    },
    children: {
      description: "The content to be displayed inside the badge",
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

// Base story showing default blue variant
export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "blue",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("Default Badge");

    // Verify badge exists and has correct classes
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass("bg-blue-100", "text-blue-800");
  },
};

// Story showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="blue">Blue</Badge>
      <Badge variant="dark">Dark</Badge>
      <Badge variant="red">Red</Badge>
      <Badge variant="green">Green</Badge>
      <Badge variant="yellow">Yellow</Badge>
      <Badge variant="indigo">Indigo</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="pink">Pink</Badge>
    </div>
  ),
};

// Story demonstrating dark mode
export const DarkMode: Story = {
  parameters: {
    themes: {
      defaultTheme: "dark",
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="blue">Blue</Badge>
      <Badge variant="dark">Dark</Badge>
      <Badge variant="red">Red</Badge>
    </div>
  ),
};

// Story with longer content
export const LongContent: Story = {
  args: {
    children: "This is a badge with longer text content",
    variant: "green",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("This is a badge with longer text content");

    // Verify badge maintains proper styling with longer content
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass("text-sm", "font-medium");
  },
};

// Story demonstrating multiple badges in a practical usage
export const InContext: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Status:</span>
        <Badge variant="green">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Priority:</span>
        <Badge variant="red">High</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Category:</span>
        <Badge variant="blue">Documentation</Badge>
        <Badge variant="indigo">Frontend</Badge>
      </div>
    </div>
  ),
};
