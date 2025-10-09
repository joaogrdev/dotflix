import SearchBar from "@/features/search/SearchBar";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import CartBar from "@/features/cart/components/CartBar";
import { useState } from "react";

const Header = () => {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-muted grid grid-rows-2 grid-cols-2 tablet:grid-cols-[auto_1fr_auto] tablet:grid-rows-1 items-center gap-3 tablet:gap-5 py-5 mx-5 tablet:px-5 tablet:border-b">
      <h1 className="text-2xl tablet:text-4xl font-bold">
        d<span className="text-contrast text-lg tablet:text-2xl">⬤</span>tflix
        <span className="text-contrast">.</span>
      </h1>

      <SearchBar />

      <div className="flex justify-end items-center gap-2 tablet:gap-2 order-2 tablet:order-last">
        <ThemeToggle />
        <Button className="bg-input text-primary hover:bg-initial hover:text-contrast cursor-pointer hover:scale-105">
          <Heart className={cn("size-4 tablet:size-5")} />
        </Button>
        <CartBar open={isCartBarOpen} onOpenChange={setIsCartBarOpen} />
      </div>
    </header>
  );
};

export default Header;
