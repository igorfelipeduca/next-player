import clsx from "clsx";
import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const logo = tv({
  base: "font-extrabold bg-gradient-to-r bg-clip-text from-zinc-600 to-white",
  variants: {
    size: {
      larger: "text-5xl",
      large: "text-4xl",
      medium: "text-3xl",
      small: "text-2xl",
      smaller: "text-xl",
    },
  },
});

type LogoProps = ComponentProps<"h1"> &
  VariantProps<typeof logo> & {
    className?: string;
  };

export default function Logo({ className, size, ...props }: LogoProps) {
  return <h1 className={clsx(logo({ size }), className)} {...props}>NX</h1>;
}
