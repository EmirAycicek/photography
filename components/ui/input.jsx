import * as React from "react";
import { cn } from "/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[55px] w-full border border-solid border-gray-300 rounded-full bg-background px-3 py-2 text-base ring-primary-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:border dark:border-solid dark:border-gray-500 dark:focus-visible:outline-none dark:focus-visible:ring-2 dark:focus-visible:ring-ring",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
