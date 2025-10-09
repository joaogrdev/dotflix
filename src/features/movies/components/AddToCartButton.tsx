import { Button } from "@/components/ui/button";
import { cn, generateAndFormatPriceMovie } from "@/lib/utils";
import { useCartStore } from "@/features/cart/store/useCartStore";
import type { Movie } from "@/types/Movie";
import { ShoppingCart } from "lucide-react";
import { toastError, toastSuccess } from "@/lib/toasts";
import { useTheme } from "@/components/ThemeProvider";

const AddToCartButton = ({ movie }: { movie: Movie }) => {
  const { theme } = useTheme();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddItemCart = () => {
    try {
      addToCart({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        price: generateAndFormatPriceMovie(movie.id),
      });
      toastSuccess("SUCESSO", `${movie.title} adicionado ao carrinho`, theme);
    } catch (error: any) {
      console.log(error);
      toastError("ALERTA", error.message, theme);
    }
  };

  return (
    <Button
      className={cn(
        "mt-2 w-full flex items-center gap-2 text-xs font-semibold bg-muted text-primary h-8 rounded-sm border border-muted/50 hover:bg-primary hover:text-muted transition-all duration-300"
      )}
      onClick={handleAddItemCart}
    >
      <ShoppingCart className="w-4 fill-contrast text-contrast" />
      Adicionar
    </Button>
  );
};

export default AddToCartButton;
