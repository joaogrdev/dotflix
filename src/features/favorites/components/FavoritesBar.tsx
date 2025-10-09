import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { Heart, X } from "lucide-react";
import { useFavoritesStore } from "../store/useFavoritesStore";
import ClearItemsButton from "@/components/ClearItemsButton";
import SidebarItem from "@/components/SidebarItem";

const FavoritesBar = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const favoritesLength = favorites.length;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <Button className="bg-input text-primary hover:bg-initial hover:text-contrast cursor-pointer hover:scale-105">
          <Heart className={cn("size-4 tablet:size-5")} />
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
            <span className="font-semibold text-xl font-logo">Meus Favoritos</span>
            <div className="flex items-center gap-2">
              <ClearItemsButton type="Favoritos" qtdItens={favoritesLength} />
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
          {favoritesLength > 0 ? (
            favorites.map((item) => <SidebarItem key={item.id} type="Favoritos" item={item} />)
          ) : (
            <p className="text-muted-foreground text-center">
              Você não tem favoritos.
            </p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FavoritesBar;
