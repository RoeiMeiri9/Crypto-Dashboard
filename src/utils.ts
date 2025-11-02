import { dict } from "./dict";

export function dateCalculation(date: Date) {
  const minutes = new Date(Date.now() - date.getTime()).getMinutes();
  return minutes === 0
    ? dict.interactions.lastUpdate.now
    : `${minutes} ${dict.interactions.lastUpdate.min}`;
}

export function parseString(str: string) {
  return str.trim().toLowerCase();
}
