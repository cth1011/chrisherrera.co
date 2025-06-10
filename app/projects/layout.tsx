// app/projects/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Chris Herrera",
  description:
    "Explore the projects of Chris Herrera, showcasing innovative software solutions and creative digital experiences.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
