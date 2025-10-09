import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BrushCleaning } from "lucide-react";
import { toastError } from "@/lib/toasts";
import { useTheme } from "@/components/ThemeProvider";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { useFavoritesStore } from "@/features/favorites/store/useFavoritesStore";

const ClearItemsButton = ({
  type,
  qtdItens,
}: {
  type: string;
  qtdItens: number;
}) => {
  const { theme } = useTheme();
  const clearItems =
    type === "Carrinho"
      ? useCartStore((state) => state.clearCart)
      : useFavoritesStore((state) => state.clearFavorites);

  const handleClear = () => {
    try {
      clearItems();
    } catch (error: any) {
      console.log(error);
      toastError("ERRO", error.message, theme);
    }
  };

  return (
    <>
      <Button
        variant={"outline"}
        className={cn("hidden mobile:block text-xs hover:!bg-destructive/25")}
        onClick={handleClear}
        disabled={qtdItens === 0}
      >
        Limpar {type}
      </Button>
      <Button
        variant={"outline"}
        className={cn("mobile:hidden text-xs hover:!bg-destructive/25")}
        onClick={handleClear}
        disabled={qtdItens === 0}
        title={`Limpar ${type}`}
      >
        <BrushCleaning className="w-4" />
      </Button>
    </>
  );
};

export default ClearItemsButton;
