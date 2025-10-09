import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { ShoppingCart, X } from "lucide-react";
import { useCartStore } from "@/features/cart/store/useCartStore";
import CartTotal from "./CartTotal";
import ClearItemsButton from "@/components/ClearItemsButton";
import SidebarItem from "@/components/SidebarItem";
import { useNavigate } from "react-router";

const CartBar = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);
  const cartLength = cartItems.length;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <Button
          className={cn(
            "bg-input text-primary hover:bg-initial hover:text-contrast cursor-pointer hover:scale-105 relative"
          )}
        >
          <ShoppingCart className={cn("size-4 tablet:size-5")} />
          {cartLength > 0 && (
            <span
              className={cn(
                "absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center font-semibold text-muted bg-contrast rounded-full"
              )}
            >
              {cartLength}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className={cn("bg-muted py-7 px-5 min-w-[300px]")}
      >
        <SheetHeader className={cn("p-0")}>
          <SheetTitle
            className={cn(
              "flex items-center justify-between gap-2 border-b pb-3"
            )}
          >
            <span className="font-semibold text-xl font-logo">Meu Carrinho</span>
            <div className="flex items-center gap-2">
              <ClearItemsButton type="Carrinho" qtdItens={cartLength} />
              <SheetClose>
                <Button
                  className={cn(
                    "bg-input text-primary hover:bg-initial hover:text-contrast cursor-pointer hover:scale-105"
                  )}
                >
                  <X className={cn("size-4")} />
                </Button>
              </SheetClose>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-3 flex-1 overflow-y-scroll scrollbar">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <SidebarItem key={item.id} type="Carrinho" item={item} />
            ))
          ) : (
            <p className="text-muted-foreground text-center">
              Seu carrinho esta vazio.
            </p>
          )}
        </div>

        <SheetFooter className={cn("p-0")}>
          <CartTotal />
          <Button
            className={cn(
              "bg-contrast text-muted hover:bg-initial/50 hover:text-initial cursor-pointer hover:scale-103 transition-all duration-300"
            )}
            disabled={cartLength === 0}
            onClick={() => {
              onOpenChange(false);
              navigate("/checkout");
            }}
          >
            Finalizar compra
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartBar;
