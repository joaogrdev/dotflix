import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider"; // hook do seu ThemeProvider

function Switch({
  className,
  tipo,
}: {
  className?: string;
  tipo: string;
  onClick?: () => void;
}) {
  const { theme, setTheme } = useTheme();

  const checked = theme === "dark";

  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
      className={cn(
        "peer relative inline-flex shrink-0 items-center rounded-full border-1  transition-colors",
        "bg-input mobile:pt-[1px] border-none h-6 w-13 mobile:h-7 mobile:w-14",
        className
      )}
    >
      {/* Ícone da Lua (esquerda) */}
      <Moon
        className={cn(
          "absolute left-1 text-primary pointer-events-none size-4 mobile:size-5"
        )}
      />

      {/* Ícone do Sol (direita) */}
      <Sun
        className={cn(
          "absolute right-1 text-primary pointer-events-none size-4 mobile:size-5"
        )}
      />

      {/* Bolinha que desliza */}
      <span
        className={cn(
          "block rounded-full bg-contrast transition-transform duration-300 size-5 mobile:size-[22px]",
          checked
            ? tipo === "mobile"
              ? "translate-x-7"
              : "translate-x-7.5"
            : "translate-x-1"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
