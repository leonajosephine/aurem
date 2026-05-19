import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button({
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center",
        "h-12 px-6",
        "border border-black/10",
        "bg-white/70 backdrop-blur-sm",
        "text-sm tracking-wide",
        "transition-all duration-500",
        "hover:bg-black hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}