import { cva, type VariantProps } from "class-variance-authority";

export const rToastStyles = cva("c-toast", {
  variants: {
    intent: {
      error: "c-toast--error",
      success: "c-toast--success",
      warning: "c-toast--warning",
      info: "c-toast--info",
    },
  },
});

export type RToastStyleProps = VariantProps<typeof rToastStyles>;
