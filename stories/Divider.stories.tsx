import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import Divider from "components/Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          "A horizontal divider component that creates a thematic break between content sections. It adapts to light and dark themes and is responsive across different screen sizes.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Additional CSS classes to apply to the divider",
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const hr = canvasElement.querySelector("hr");
    await expect(hr).toBeInTheDocument();
    await expect(hr).toHaveClass(
      "my-4",
      "mx-auto",
      "w-48",
      "h-1",
      "bg-gray-100",
      "rounded",
      "border-0",
    );
  },
};

export const CustomWidth: Story = {
  args: {
    className: "w-96", // Override default width
  },
};

export const CustomSpacing: Story = {
  args: {
    className: "my-8 mx-4", // Custom margin
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
