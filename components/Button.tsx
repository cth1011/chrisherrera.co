import tw from "twin.macro";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => (
  <StyledButton type="button">{children}</StyledButton>
);

export default Button;

const StyledButton = tw.button`
text-white text-sm font-medium  text-center
bg-gradient-to-br from-purple-600 to-blue-500 
hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
focus:ring-blue-300 dark:focus:ring-blue-800 
rounded-lg px-5 py-2.5 mr-2 mb-2
inline-flex items-center transition-all duration-1000
`;
