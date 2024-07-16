"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="disabled:opacity-50 w-full h-12 bg-blue-500 text-white rounded-md"
      {...rest}
    >
      {children}
    </button>
  );
};
