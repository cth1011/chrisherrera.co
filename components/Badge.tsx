import styled from "styled-components";
import tw, { TwStyle } from "twin.macro";

type BadgeVariant =
  | "blue"
  | "dark"
  | "red"
  | "green"
  | "yellow"
  | "indigo"
  | "purple"
  | "pink";

type BadgeProps = {
  variant?: BadgeVariant;
  children: React.ReactNode;
};

const badgeVariants: Record<BadgeVariant, TwStyle> = {
  blue: tw`bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800`,
  dark: tw`bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300`,
  red: tw`bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900`,
  green: tw`bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900`,
  yellow: tw`bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900`,
  indigo: tw`bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900`,
  purple: tw`bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900`,
  pink: tw`bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900`,
};

const StyledBadge = styled.span<BadgeProps>(({ variant }: BadgeProps) => [
  tw`text-sm font-medium mr-2 px-2.5 py-0.5 rounded `,
  ({ variant = "blue" }) => badgeVariants[variant],
]);

const Badge = ({ variant, children }: BadgeProps) => (
  <StyledBadge variant={variant}>{children}</StyledBadge>
);

export default Badge;
