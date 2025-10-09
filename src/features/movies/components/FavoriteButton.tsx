import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { useFavoritesStore } from "@/features/favorites/store/useFavoritesStore";
import { toastError } from "@/lib/toasts";
import { cn, generateAndFormatPriceMovie } from "@/lib/utils";
import type { Movie } from "@/types/Movie";
import { Heart } from "lucide-react";
import { useEffect } from "react";

const FavoriteButton = ({ movie }: { movie: Movie }) => {
  const { theme } = useTheme();
  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = favorites.some((item) => item.id === movie.id);

  const handleToggleFavorite = () => {
    try {
      if (isFavorite) {
        removeFavorite(movie.id);
      } else {
        addFavorite({
          id: movie.id,
          title: movie.title,
          poster: movie.poster_path,
          price: generateAndFormatPriceMovie(movie.id),
        });
      }
    } catch (error: any) {
      console.log(error);
      toastError("ERRO", error.message, theme);
    }
  };

  return (
    <Button
      className={cn(
        "absolute top-0 right-0 p-2 rounded-none rounded-bl-lg bg-muted hover:bg-initial hover:scale-120 transition-all duration-300"
      )}
      title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      onClick={handleToggleFavorite}
    >
      <Heart
        className={cn("size-5", {
          "fill-contrast text-contrast": isFavorite,
          "text-primary": !isFavorite,
        })}
      />
    </Button>
  );
};

export default FavoriteButton;
