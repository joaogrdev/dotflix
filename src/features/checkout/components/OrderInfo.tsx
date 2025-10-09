import { useTheme } from "@/components/ThemeProvider";
import CartTotal from "@/features/cart/components/CartTotal";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { toastError } from "@/lib/toasts";
import type { CheckoutFormData } from "@/pages/Checkout";
import { useFormContext } from "react-hook-form";
import OrderCompletedModal from "./OrderCompletedModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrderTable from "./OrderTable";

const OrderInfo = ({
  onSubmit,
}: {
  onSubmit: (data: CheckoutFormData) => void;
}) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const cartItemsLength = cartItems.length;
  const { theme } = useTheme();
  const form = useFormContext<CheckoutFormData>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFinish = async () => {
    const isValid = await form.trigger();
    if (!isValid) {
      toastError("ERRO", "Dados incorretos ou ausentes no formulário!", theme);
      return;
    }
    onSubmit(form.getValues());
    setIsModalOpen(true);
  };

  return (
    <section className="w-full flex flex-col justify-start gap-1">
      <OrderTable cartItems={cartItems} cartItemsLength={cartItemsLength} />
      <CartTotal />
      <Button
        className="w-full bg-contrast text-muted hover:bg-contrast/75 hover:scale-102 transition-all duration-300"
        onClick={handleFinish}
        disabled={cartItemsLength === 0}
      >
        Finalizar Compra
      </Button>
      <OrderCompletedModal open={isModalOpen} />
    </section>
  );
};

export default OrderInfo;
