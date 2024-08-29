import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 
 * @clsx : used to merge the className with conditional classNames [ eg: clsx("p-4 text-red-400",user && "underline") ].
 * 
 * @twMerge : used to remove the duplications.  [ eg: twMerge('p-4', 'p-6', 'text-center', 'text-left') ]
 * 
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
