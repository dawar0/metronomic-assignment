import * as React from "react";

import { cn } from "@/lib/utils";

const Fieldset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground", className)}
    {...props}
  />
));
Fieldset.displayName = "Fieldset";

const FieldsetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center bg-[#F9FAFB] p-[10px] rounded-t-xl",
      className
    )}
    {...props}
  />
));
FieldsetHeader.displayName = "FieldsetHeader";

const FieldsetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[12px] font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
FieldsetTitle.displayName = "FieldsetTitle";

const FieldsetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FieldsetDescription.displayName = "FieldsetDescription";

const FieldsetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 grid grid-cols-12 gap-2", className)}
    {...props}
  />
));
FieldsetContent.displayName = "FieldsetContent";

const FieldsetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
FieldsetFooter.displayName = "FieldsetFooter";

export {
  Fieldset,
  FieldsetHeader,
  FieldsetFooter,
  FieldsetTitle,
  FieldsetDescription,
  FieldsetContent,
};
