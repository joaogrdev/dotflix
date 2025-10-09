import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/features/cart/store/useCartStore";

const CartTotal = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  
  const total = cartItems.reduce((acc, item): number => {
    const priceNumber = Number(item.price.replace(",", "."));
    return acc + priceNumber;
  }, 0);

  return (
    <div className="flex items-center justify-between">
      <span className="text-lg">Total:</span>
      <span className="text-xl font-bold">
        <span className="text-xs">R$</span>
        {formatCurrency(total)}
      </span>
    </div>
  );
};

export default CartTotal;
