import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { toastError } from "@/lib/toasts";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

const OrderCompletedModal = ({ open }: { open: boolean }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);

  const handleClearOrder = () => {
    try {
      clearCart();
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toastError("ERRO", error.message, theme);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="flex flex-col items-center gap-6 w-fit bg-muted min-w-[300px]"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="text-lg tablet:text-xl">
            Obrigado Uzumaki Naruto!
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm tablet:text-base font-thin text-center">Sua compra foi finalizada com sucesso!</p>
        <Button
          onClick={handleClearOrder}
          className={cn(
            "bg-contrast hover:bg-contrast/80 hover:scale-103 transition-all duration-300 w-full"
          )}
        >
          Ir para loja
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OrderCompletedModal;
