import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { userEvent, within } from "@storybook/test";
import Header from "components/Header";
import MyThemeContext from "store/theme";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A responsive header component that includes navigation links and a theme toggle button. It provides navigation to the home page, about page, and projects page, along with dark/light theme switching functionality.",
      },
    },
  },
  decorators: [
    (Story) => (
      <MyThemeContext.Provider
        value={{
          isDarkTheme: false,
          toggleThemeHandler: () => {},
        }}
      >
        <div className="px-4">
          <Story />
        </div>
      </MyThemeContext.Provider>
    ),
  ],
  argTypes: {
    // Since all props are handled through context, we don't have direct props to document
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Header component in light theme with navigation links and theme toggle.",
      },
    },
  },
};

export const Dark: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Header component in dark theme with navigation links and theme toggle.",
      },
    },
  },
  decorators: [
    (Story) => (
      <MyThemeContext.Provider
        value={{
          isDarkTheme: true,
          toggleThemeHandler: () => {},
        }}
      >
        <div className="dark bg-gray-900 px-4">
          <Story />
        </div>
      </MyThemeContext.Provider>
    ),
  ],
};

export const NavigationTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify all navigation links are present
    const homeLink = canvas.getByText("CHRIS HERRERA");
    const aboutLink = canvas.getByText("About");
    const projectsLink = canvas.getByText("Projects");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();

    // Verify theme toggle button is present and clickable
    const themeToggle = canvas.getByRole("button");
    await userEvent.click(themeToggle);
    expect(themeToggle).toBeInTheDocument();
  },
};
