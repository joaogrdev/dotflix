import { Button } from "@/components/ui/button";
import { cn, generateAndFormatPriceMovie } from "@/lib/utils";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import { toastError, toastSuccess } from "@/lib/toasts";
import { useTheme } from "@/components/ThemeProvider";
import type { CartMovie } from "@/types/CartMovie";

const AddToCartButton = ({ movie }: { movie: CartMovie }) => {
  const { theme } = useTheme();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddItemCart = () => {
    try {
      addToCart({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
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
      variant={"outline"}
      className={cn("size-7 hover:scale-110 self-start rounded-sm")}
      onClick={handleAddItemCart}
      title="Adicionar ao carrinho"
    >
      <ShoppingCart className="text-primary size-4" />
    </Button>
  );
};

export default AddToCartButton;
