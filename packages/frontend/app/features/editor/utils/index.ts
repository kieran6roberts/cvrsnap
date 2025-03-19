import { HEXColor } from '~/shared/consts';
export const decimalToPercentage = (decimal: number) => decimal * 100;

export function splitAndCapitalizeCamelCase(str: string) {
  return str
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Constructs a gradient string
 * @param type - The type of gradient
 * @param direction - The direction of the gradient in degrees
 * @param colors - The colors of the gradient
 * @returns The gradient string
 */
export function constructGradientString({
  type,
  direction,
  colors
}: {
  type: string;
  direction: string;
  colors: HEXColor[];
}) {
  return `${type}(${direction}, ${colors.join(', ')})`;
}

// /**
//  * Extracts the direction from a gradient string
//  * @param gradientStr - The gradient string to extract the direction from
//  * @returns The direction from the gradient string
//  */
// export function extractDirectionFromGradientString(gradientStr: string) {
//   const match = gradientStr.match(/linear-gradient\(([^,]+),/);
//   return match ? match[1].trim() : 'to bottom';
// }
