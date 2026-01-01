// src/components/ui/Button.jsx
export default function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
  const baseClasses = "font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-lg";

  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-yellow-400/50",
    secondary: "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
    outline: "border-2 border-gray-600 text-gray-200 hover:border-yellow-400 hover:text-yellow-400 bg-neutral-900"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
