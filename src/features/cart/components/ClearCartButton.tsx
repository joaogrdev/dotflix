import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { BrushCleaning } from "lucide-react";

const ClearCartButton = ({ qtdItens }: { qtdItens: number }) => {
  const clearCart = useCartStore((state) => state.clearCart);

  const handleClearCart = () => {
    try {
      clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        variant={"outline"}
        className={cn("hidden mobile:block text-xs hover:!bg-destructive/25")}
        onClick={handleClearCart}
        disabled={qtdItens === 0}
      >
        Limpar carrinho
      </Button>
      <Button
        variant={"outline"}
        className={cn("mobile:hidden text-xs hover:!bg-destructive/25")}
        onClick={handleClearCart}
        disabled={qtdItens === 0}
        title="Limpar carrinho"
      >
        <BrushCleaning className="w-4" />
      </Button>
    </>
  );
};

export default ClearCartButton;
