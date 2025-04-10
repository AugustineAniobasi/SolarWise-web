import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}
