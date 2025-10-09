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

const CartItem = ({ item }: { item: CartMovie }) => {
  const removeItem = useCartStore((state) => state.removeItem);

  const handleRemoveCartItem = () => {
    try {
      removeItem(item.id);
    } catch (error) {
      console.log(error);
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

      <ItemActions>
        <Button
          variant={"outline"}
          className={cn("size-8 hover:scale-110 self-start")}
          onClick={handleRemoveCartItem}
        >
          <Trash className="text-contrast size-4" />
        </Button>
      </ItemActions>
    </Item>
  );
};

export default CartItem;
