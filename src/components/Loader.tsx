import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Loader = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg justify-center",
        className
      )}
    >
      <Loader2
        role="status"
        aria-label="Loading"
        className={cn("size-6 animate-spin text-contrast")}
        {...props}
      />
      <span className="text-primary font-thin">Carregando...</span>
    </div>
  );
};

export default Loader;
