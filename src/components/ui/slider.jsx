import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  (
    { className, color = { front: "#000", back: "#e5e5e5" }, ...props },
    ref
  ) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className="relative h-1.5 w-full grow overflow-hidden rounded-full"
          style={{
            backgroundColor: color.back,
          }}
        >
          <SliderPrimitive.Range
            className="absolute h-full"
            style={{
              backgroundColor: color.front,
            }}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block h-4 w-4 rounded-full border-2 shadow hover:scale-110 transition-transform focus:outline-none"
          style={{
            backgroundColor: color.front,
            borderColor: color.back,
          }}
        />
      </SliderPrimitive.Root>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
