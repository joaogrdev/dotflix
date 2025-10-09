import FeedbackMsg from "@/components/FeedbackMsg";
import SidebarItem from "@/components/SidebarItem";
import type { CartMovie } from "@/types/CartMovie";

const OrderTable = ({
  cartItems,
  cartItemsLength,
}: {
  cartItems: CartMovie[];
  cartItemsLength: number;
}) => {
  return (
    <>
      <h2 className="border-b pb-1">Resumo do Pedido</h2>
      <div className="flex flex-col gap-1 overflow-y-auto tablet:max-h-[51vh] mb-4 pt-2">
        {cartItemsLength > 0 ? (
          cartItems.map((item) => (
            <SidebarItem key={item.id} type="Checkout" item={item} />
          ))
        ) : (
          <FeedbackMsg
            msg="Nenhum item no carrinho."
            type="error"
            className="py-3 bg-input/25"
          />
        )}
      </div>
    </>
  );
};

export default OrderTable;
