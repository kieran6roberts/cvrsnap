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

/**
 * Updates the direction of a gradient string
 * @param gradientStr - The gradient string to update the direction of
 * @param direction - The new direction of the gradient
 * @returns The updated gradient string
 */
export function updateGradientDirection({ gradientStr, direction }: { gradientStr: string; direction: string }) {
  const deg = gradientStr.slice(gradientStr.indexOf('(') + 1, gradientStr.indexOf(','));
  return gradientStr.replace(deg, direction);
}

/**
 * Extracts the direction number from a gradient string
 * @param gradientStr - The gradient string to extract the direction number from
 * @returns The direction number
 */
export function extractGradientDirectionNumber({ gradientStr }: { gradientStr: string }) {
  if (!gradientStr) {
    return 90;
  }
  const deg = gradientStr.slice(gradientStr.indexOf('(') + 1, gradientStr.indexOf(','));
  const degNumber = parseInt(deg.replace('deg', ''));
  return degNumber;
}
