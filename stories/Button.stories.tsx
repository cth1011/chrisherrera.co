import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import Button from "components/Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "A customizable button component that features a gradient background, hover effects, and focus states. Built with Tailwind CSS, it supports custom children content and click handlers.",
      },
    },
  },
  argTypes: {
    children: {
      description: "The content to be displayed inside the button",
      control: "text",
    },
    onClick: {
      description: "Optional click handler function",
      control: fn(),
    },
    className: {
      description: "Additional CSS classes to be applied to the button",
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "Custom Style",
    className: "bg-gradient-to-r from-red-500 to-orange-500",
  },
};

export const WithClickHandler: Story = {
  args: {
    children: "Click to Test",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the button
    const button = canvas.getByRole("button");

    // Click the button
    await userEvent.click(button);

    // Verify that onClick was called
    expect(args.onClick).toHaveBeenCalled();
  },
};
// Test story to verify focus state
export const WithFocusTest: Story = {
  args: {
    children: "Focus Test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Focus the button
    await userEvent.tab();

    // Verify button receives focus
    await expect(button).toHaveFocus();

    // Verify focus ring styles are applied
    expect(button.className).toContain("focus:ring-4");
  },
};
