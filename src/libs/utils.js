import { clsx } from "clsx";
import { Table } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(...inputs));
};
