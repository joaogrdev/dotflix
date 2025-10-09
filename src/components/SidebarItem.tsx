import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/features/cart/store/useCartStore";
import type { CartMovie } from "@/types/CartMovie";
import { Trash } from "lucide-react";
import { useFavoritesStore } from "@/features/favorites/store/useFavoritesStore";
import { toastError } from "@/lib/toasts";
import { useTheme } from "./ThemeProvider";
import AddToCartButton from "@/features/favorites/components/AddToCartButton";

const SidebarItem = ({ type, item }: { type: string; item: CartMovie }) => {
  const { theme } = useTheme();
  const removeItem =
    type === "Carrinho"
      ? useCartStore((state) => state.removeItem)
      : useFavoritesStore((state) => state.removeFavorite);

  const handleRemoveItem = () => {
    try {
      removeItem(item.id);
    } catch (error: any) {
      console.log(error);
      toastError("ERRO", error.message, theme, "bottom-right");
    }
  };

  return (
    <Item className={cn("bg-input/50")}>
      <ItemMedia variant={"image"} className="h-full aspect-[3/4] object-cover">
        <img src={`https://image.tmdb.org/t/p/w500${item.poster}`} alt="" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className={cn("text-sm font-semibold")}>
          {item.title}
        </ItemTitle>
        <ItemDescription className={cn("text-lg -mt-1 text-primary/75")}>
          <span className="text-xs mr-1">R$</span>
          {item.price}
        </ItemDescription>
      </ItemContent>

      <ItemActions className="flex flex-col">
        {type !== "Carrinho" && <AddToCartButton movie={item} />}
        <Button
          variant={"outline"}
          className={cn(
            "size-7 hover:scale-110 self-start rounded-sm",
            type === "Carrinho" && "size-8"
          )}
          onClick={handleRemoveItem}
          title={
            type === "Carrinho"
              ? "Remover do carrinho"
              : "Remover dos favoritos"
          }
        >
          <Trash className="text-contrast size-4" />
        </Button>
      </ItemActions>
    </Item>
  );
};

export default SidebarItem;
