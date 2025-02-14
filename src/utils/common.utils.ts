import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const decodeHtmlEntities = (text: string) => {
  const entityMap: { [key: string]: string } = {
    "&quot;": '"',
    "&#039;": "'",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&rdquo;": "”",
  };

  return text.replace(
    /&quot;|&#039;|&amp;|&lt;|&gt;|&rdquo;/g,
    (match) => entityMap[match] || match,
  );
};
