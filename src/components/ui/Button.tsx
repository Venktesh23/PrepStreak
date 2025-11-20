import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex cursor-pointer items-center justify-center overflow-hidden font-bold leading-normal tracking-[0.015em] transition-all";

  const variantStyles = {
    primary:
      "bg-primary text-white border-2 border-brand-dark shadow-[var(--shadow-chunky)] hover:shadow-[var(--shadow-chunky-hover)]",
    secondary:
      "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white",
    outline:
      "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark/10",
  };

  const sizeStyles = {
    sm: "h-10 px-4 text-sm rounded-md",
    md: "h-12 px-5 text-base rounded-md",
    lg: "h-14 px-8 text-xl rounded-lg font-[family-name:var(--font-display)] uppercase",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
}
