import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PostPage from "pages/posts/[slug]";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const meta: Meta<typeof PostPage> = {
  title: "Components/PostPage",
  component: PostPage,
  parameters: {
    docs: {
      description: {
        component:
          "PostPage is a dynamic page component that renders MDX content with support for responsive images. It handles both the content and frontmatter of blog posts, providing a consistent layout for blog post pages.",
      },
    },
  },
  argTypes: {
    source: {
      description: "MDX source content that has been serialized",
      control: "object",
    },
    frontMatter: {
      description:
        "Metadata about the post including title and other properties",
      control: "object",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PostPage>;

const mockSource: MDXRemoteSerializeResult = {
  compiledSource: "",
  scope: {},
  frontmatter: {},
};

export const Default: Story = {
  args: {
    source: mockSource,
    frontMatter: {
      title: "Example Blog Post",
      date: "2024-01-01",
      description: "This is an example blog post",
      tags: ["books"],
      thumbnail: "none",
    },
  },
};

export const WithImage: Story = {
  args: {
    source: {
      ...mockSource,
      compiledSource: `
        function _createMdxContent(props) {
          return <img src="/example-image.jpg" alt="Example" width="800" height="400" />;
        }
      `,
    },
    frontMatter: {
      title: "Post with Image",
      date: "2024-01-02",
      description: "This post includes an image",
      tags: ["books"],
      thumbnail: "none",
    },
  },
};

// Add interaction tests
export const NavigationTest: Story = {
  args: {
    source: mockSource,
    frontMatter: {
      title: "Navigation Test Post",
      date: "2024-01-03",
      description: "Testing navigation and interaction",
      tags: ["books"],
      thumbnail: "none",
    },
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("@storybook/test");
    const canvas = within(canvasElement);

    // Verify the title is rendered
    const title = canvas.getByRole("heading", { level: 1 });
    await expect(title).toHaveTextContent("Navigation Test Post");

    // Verify article structure
    const article = canvas.getByRole("article");
    await expect(article).toBeInTheDocument();
  },
};
