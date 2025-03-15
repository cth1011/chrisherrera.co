import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import Thumbnail from "components/Thumbnail";

const meta = {
  title: "Components/Thumbnail",
  component: Thumbnail,
  parameters: {
    docs: {
      description: {
        component:
          "A responsive image thumbnail component that optionally wraps the image in a Next.js Link component when a slug is provided. Used for displaying cover images with optional navigation capabilities.",
      },
    },
  },
  argTypes: {
    title: {
      description: "The title of the image, used for alt text and aria-label",
      control: "text",
    },
    src: {
      description: "The source URL of the image",
      control: "text",
    },
    slug: {
      description:
        "Optional slug for the post link. If provided, the thumbnail becomes clickable and links to the post",
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Basic: Story = {
  args: {
    title: "Example Blog Post",
    src: "/api/placeholder/1280/720",
  },
};

export const WithLink: Story = {
  args: {
    title: "Example Blog Post with Link",
    src: "/api/placeholder/1280/720",
    slug: "example-post",
  },
};

export const WithLinkInteraction: Story = {
  args: {
    ...WithLink.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify the link exists and has correct attributes
    const link = canvas.getByRole("link");
    await expect(link).toHaveAttribute("href", "/posts/example-post");
    await expect(link).toHaveAttribute(
      "aria-label",
      "Example Blog Post with Link",
    );

    // Test link interaction
    await userEvent.click(link);
  },
};

export const WithLongTitle: Story = {
  args: {
    title:
      "A Very Long Blog Post Title That Should Still Work Well With The Component",
    src: "/api/placeholder/1280/720",
    slug: "long-title-post",
  },
};

// Testing that the component works without a slug (no link wrapper)
export const NoLinkInteraction: Story = {
  args: {
    ...Basic.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify no link exists
    const links = canvas.queryAllByRole("link");
    await expect(links).toHaveLength(0);

    // Verify image exists with correct alt text
    const image = canvas.getByAltText(
      "Thumbnail cover image Example Blog Post",
    );
    await expect(image).toBeInTheDocument();
  },
};
