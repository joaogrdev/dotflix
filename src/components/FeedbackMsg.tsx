import { cn } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";

const FeedbackMsg = ({
  msg,
  type,
  className,
}: {
  msg: string;
  type: "success" | "error";
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-center items-center gap-2", className)}>
      {type === "success" ? (
        <CircleCheck className={cn("text-contrast")} />
      ) : (
        <CircleX className={cn("text-contrast")} />
      )}
      <span className="text-primary font-thin">{msg}</span>
    </div>
  );
};

export default FeedbackMsg;
