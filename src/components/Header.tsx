import SearchBar from "@/features/search/components/SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import CartBar from "@/features/cart/components/CartBar";
import { useState } from "react";
import FavoritesBar from "@/features/favorites/components/FavoritesBar";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);
  const [isFavoritesBarOpen, setIsFavoritesBarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-muted grid grid-rows-2 grid-cols-2 tablet:grid-cols-[auto_1fr_auto] tablet:grid-rows-1 items-center gap-3 tablet:gap-5 py-5 mx-5 tablet:px-5 tablet:border-b">
      <h1
        className="text-3xl tablet:text-4xl font-bold cursor-pointer font-logo"
        onClick={() => {
          if (pathname !== "/") navigate("/");
        }}
      >
        d<span className="text-contrast text-xl tablet:text-2xl">⬤</span>tflix
        <span className="text-contrast">.</span>
      </h1>

      <SearchBar />

      <div className="flex justify-end items-center gap-2 tablet:gap-2 order-2 tablet:order-last">
        <ThemeToggle />
        <FavoritesBar
          open={isFavoritesBarOpen}
          onOpenChange={setIsFavoritesBarOpen}
        />
        <CartBar open={isCartBarOpen} onOpenChange={setIsCartBarOpen} />
      </div>
    </header>
  );
};

export default Header;
