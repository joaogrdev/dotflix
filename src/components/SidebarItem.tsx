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
import { ImageOff, Trash } from "lucide-react";
import { useFavoritesStore } from "@/features/favorites/store/useFavoritesStore";
import { toastError } from "@/lib/toasts";
import { useTheme } from "./ThemeProvider";
import AddToCartButton from "@/features/favorites/components/AddToCartButton";

const SidebarItem = ({ type, item }: { type: string; item: CartMovie }) => {
  const { theme } = useTheme();
  const removeItem =
    type === "Favoritos"
      ? useFavoritesStore((state) => state.removeFavorite)
      : useCartStore((state) => state.removeItem);

  const handleRemoveItem = () => {
    try {
      removeItem(item.id);
    } catch (error: any) {
      console.log(error);
      toastError("ERRO", error.message, theme, "bottom-right");
    }
  };

  return (
    <Item className={cn("bg-input/50", type === "Checkout" && "p-2")}>
      <ItemMedia
        variant={"image"}
        className={cn(
          "h-full aspect-[3/4] object-cover",
          type === "Checkout" && "aspect-[9/3]"
        )}
      >
        {item.poster ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w300/${item.poster}`}
            alt={item.title}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageOff/>
          </div>
        )}
      </ItemMedia>
      <ItemContent
        className={cn(type === "Checkout" && "grid grid-cols-[1fr_auto]")}
      >
        <ItemTitle
          className={cn(
            "text-sm mobile:text-base font-semibold font-title leading-snug",
            type === "Checkout" && "truncate max-w-[90%]"
          )}
          title={item.title}
        >
          {item.title}
        </ItemTitle>
        <ItemDescription
          className={cn(
            "text-base mobile:text-lg -mt-1 text-primary/75",
            type === "Checkout" && "text-sm"
          )}
        >
          <span className="text-xs mr-1">R$</span>
          {item.price}
        </ItemDescription>
      </ItemContent>

      <ItemActions className="flex flex-col">
        {type === "Favoritos" && <AddToCartButton movie={item} />}
        <Button
          variant={"outline"}
          className={cn(
            "size-8 hover:scale-110 self-start rounded-sm",
            type === "Favoritos" && "size-7"
          )}
          onClick={handleRemoveItem}
          title={
            type === "Favoritos"
              ? "Remover dos favoritos"
              : "Remover do carrinho"
          }
        >
          <Trash className="text-contrast size-4" />
        </Button>
      </ItemActions>
    </Item>
  );
};

export default SidebarItem;
