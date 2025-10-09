import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number | string): string {
  value = Number(value);
  return value.toFixed(2).replace(".", ",");
}

export function generateAndFormatPriceMovie(movieId: number): string {
  const moviePrice = String(movieId).substring(0, 2);
  let price: number | string = +moviePrice * 3.14;
  if (price > 100) {
    price = String(price).substring(0, 2);
  }
  return formatCurrency(price);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}
