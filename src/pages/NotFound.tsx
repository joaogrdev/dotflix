import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center h-full flex-col gap-2 text-primary">
      <h1 className="text-5xl tablet:text-8xl font-black font-logo">404</h1>
      <p className="text-base tablet:text-xl">Ops! Página não encontrada.</p>
      <Button
        onClick={() => navigate(-1)}
        className={cn(
          "bg-contrast text-muted hover:scale-103 hover:bg-contrast/75 w-50 mt-4"
        )}
      >
        Voltar
      </Button>
    </div>
  );
};

export default NotFound;
