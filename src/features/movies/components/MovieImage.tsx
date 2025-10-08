import { useEffect, useState } from "react";
import type { Movie } from "@/types/Movie";

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
    <img
      loading="lazy"
      src={imageUrl}
      alt={movie.title}
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
    />
  );
};

export default MovieImage;
