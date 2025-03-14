import type { Component, VNode } from "vue";
import { computed, ref } from "vue";

export type StringOrVNode = string | VNode | (() => VNode);

type ToasterToast = {
  id: string;
  title?: string;
  description?: StringOrVNode;
  action?: Component;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
};

let count = 0;

function genId() {
  count = count + 1;
  return count.toString();
}

interface State {
  toasts: ToasterToast[];
}

const state = ref<State>({
  toasts: [],
});

const addToast = (toast: ToasterToast) => {
  state.value.toasts = [toast, ...state.value.toasts];
};

const dismissToast = (toastId?: ToasterToast["id"]) => {
  if (toastId === undefined) {
    state.value.toasts = [];
  } else {
    // Hide toast
    const toast = state.value.toasts.find((t) => t.id === toastId);
    if (!toast) return;

    toast.open = false;

    // Remove toast after exit animation runs
    requestAnimationFrame(() => {
      setTimeout(() => {
        state.value.toasts = state.value.toasts.filter(
          (toast) => toast.id !== toastId
        );

        if (state.value.toasts.length === 0) {
          count = 0;
        }
      }, 150);
    });
  }
};

type Toast = Omit<ToasterToast, "id">;

function toast(props: Toast) {
  const newToastId = genId();

  const dismiss = () => dismissToast(newToastId);

  addToast({
    ...props,
    id: newToastId,
    open: true,
    onOpenChange: (open: boolean) => {
      if (!open) dismiss();
    },
  });

  return {
    id: newToastId,
    dismiss,
  };
}

function useToast() {
  return {
    toasts: computed(() => state.value.toasts),
    toast,
    dismiss: (toastId?: string) => dismissToast(toastId),
  };
}

export { toast, useToast };
