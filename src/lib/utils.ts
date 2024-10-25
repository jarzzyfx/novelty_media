import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// generates id
export const generate_id = function (access_Token: string) {
  let _id = `${access_Token.slice(0, 3)}-uki-v1-${access_Token.slice(
    2,
    5
  )}-uki-v2-${access_Token.length * Math.floor(Math.random() * 100)}__sec`;

  return _id;
};

export function getCurrentYear() {
  let year;
  year = new Date().getFullYear();
  return year;
}
