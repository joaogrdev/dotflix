import { CircleCheckBig, CircleX } from "lucide-react";
import { toast } from "sonner";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

const duration = 3000;
const bgDark = "#1f1f1ffa";
const bgLight = "#f9f9f9fa";
const colorError = "#ff4d4f";
const colorSuccess = "#52c41a";

export const toastError = (
  title: string,
  description?: string,
  theme: string = "dark",
  position: ToastPosition = "bottom-right"
) => {
  toast.error(title, {
    description,
    duration,
    position,
    richColors: false,
    descriptionClassName: theme === "dark" ? "!text-white" : "!text-black",
    style: {
      background: theme === "dark" ? bgDark : bgLight,
      color: colorError,
      borderRadius: "0.5rem",
      gap: "0.75rem",
      border: "1px solid #ff4d4f30",
      position: "fixed",
      top: "6rem",
      right: "1rem",
      height: "fit-content",
    },
    icon: <CircleX size={20} />,
  });
};

export const toastSuccess = (
  title: string,
  description?: string,
  theme: string = "dark",
  position: ToastPosition = "bottom-right"
) => {
  toast.success(title, {
    description,
    duration,
    position,
    richColors: false,
    descriptionClassName: theme === "dark" ? "!text-white" : "!text-black",
    style: {
      background: theme === "dark" ? bgDark : bgLight,
      color: colorSuccess,
      borderRadius: "0.5rem",
      gap: "0.75rem",
      border: "1px solid #52c41a30",
      position: "fixed",
      top: "6rem",
      right: "1rem",
      height: "fit-content",
    },
    icon: <CircleCheckBig size={20} />,
  });
};
