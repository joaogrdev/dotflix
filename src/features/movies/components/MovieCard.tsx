import type { Movie } from "@/types/Movie";
import { Star } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import FavoriteButton from "./FavoriteButton";
import TrailerButton from "./TrailerButton";
import AddToCartButton from "./AddToCartButton";
import MovieImage from "./MovieImage";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const price = movie.vote_average * 3.14;
  const rating = movie.vote_average.toFixed(1);

  return (
    <div className="group relative w-full aspect-[3/2] mobile:aspect-[2/3] rounded-lg overflow-hidden cursor-pointer transition-all duration-300">
      <MovieImage movie={movie} />

      {/* Gradiente bottom card */}
      <div className="absolute bottom-0 left-0 inset-0 bg-gradient-to-t from-black via-black/30 group-hover:via-black/75 to-transparent"></div>

      <FavoriteButton movie={movie} />
      <TrailerButton movie={movie} />

      <div className="absolute bottom-0 w-full p-3 text-lightest transition-all duration-300">
        <h2 className="text-lg mb-1 truncate max-w-[90%]">{movie.title}</h2>

        <div className="flex items-center justify-between">
          <span className="text-lightest font-thin text-lg -mt-1">
            <span className="text-xs">R$ </span>
            {formatCurrency(price)}
          </span>

          <div className="flex items-center gap-1 text-xs">
            <Star className={cn("w-3 fill-contrast text-contrast")} />
            <span>{rating}</span>
          </div>
        </div>

        <div className="overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-300 ease-out">
          <AddToCartButton movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
