import { useEffect, useState } from "react";
import type { Movie } from "@/types/Movie";
import { ImageOff } from "lucide-react";

const MovieImage = ({ movie }: { movie: Movie }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageUrl =
    windowWidth < 480
      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
      : `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <>
      {movie.poster_path ? (
        <img
          loading="lazy"
          src={imageUrl}
          alt={movie.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <ImageOff className="tablet:size-10" />
        </div>
      )}
    </>
  );
};

export default MovieImage;
