import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Movie } from "@/types/Movie";
import { ShoppingCart } from "lucide-react";

const AddToCartButton = ({ movie }: { movie: Movie }) => {
  return (
    <Button
      className={cn(
        "mt-2 w-full flex items-center gap-2 text-xs font-semibold bg-muted text-primary h-8 rounded-sm border border-muted/50 hover:bg-primary hover:text-muted transition-all duration-300"
      )}
    >
      <ShoppingCart className="w-4 fill-contrast text-contrast" />
      Adicionar
    </Button>
  );
};

export default AddToCartButton;
