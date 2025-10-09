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
  if (isNaN(rating)) return "-";
  return rating.toFixed(1);
}

export function applyMask(value: any, type: "cep" | "cpf" | "celular"): any {
  const content = value.replace(/\D/g, "");

  switch (type) {
    case "cep":
      // 99999-999
      return content.replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);

    case "celular":
      if (content.length <= 10) {
        // (99) 9999-9999
        return content
          .replace(/^(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4})(\d)/, "$1-$2")
          .slice(0, 14);
      } else {
        // (99) 99999-9999
        return content
          .replace(/^(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2")
          .slice(0, 15);
      }

    case "cpf":
      // 999.999.999-99
      return content
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1-$2")
        .slice(0, 14);

    default:
      return value;
  }
}
