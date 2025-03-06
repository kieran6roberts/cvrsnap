export const decimalToPercentage = (decimal: number) => decimal * 100;

export function splitAndCapitalizeCamelCase(str: string) {
  return str
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
