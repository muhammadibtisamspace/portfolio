interface ButtonProps {
  className: string;
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  className = "",
  size = "md",
  children,
}) => {
  const baseClasses =
    "relative rounded-full overflow-hidden font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center ">
        {children}
      </span>
    </button>
  );
};

export default Button;
