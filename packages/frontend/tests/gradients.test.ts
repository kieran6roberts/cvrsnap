import { describe, test, expect } from 'vitest';

import { HEXColor } from '~/shared/consts';
import {
  extractGradientDirectionNumber,
  updateGradientDirection,
  constructGradientString
} from '../app/features/editor/utils';
import { DEFAULT_GRADIENT_DIRECTION } from '~/features/editor/consts';

const TEST_GRADIENT_STRING = 'linear-gradient(120deg, #000000, #ffffff)';

const GRADIENT_PRESET_DATA: {
  id: string;
  name: string;
  value: {
    colors: HEXColor[];
    type: string;
  };
} = {
  id: 'test',
  name: 'Test',
  value: {
    colors: ['#000000', '#ffffff'],
    type: 'linear-gradient'
  }
};

describe('Utils for handling gradients', () => {
  describe('constructGradientString()', () => {
    test('constructGradientString()', () => {
      const gradientString = constructGradientString({
        type: GRADIENT_PRESET_DATA.value.type,
        direction: '120deg',
        colors: GRADIENT_PRESET_DATA.value.colors
      });
      expect(gradientString).equal(TEST_GRADIENT_STRING);
    });
  });

  describe('updateGradientDirection()', () => {
    test('updateGradientDirection(): With degrees', () => {
      const updatedGradientString = updateGradientDirection({
        gradientStr: TEST_GRADIENT_STRING,
        direction: '180deg'
      });
      expect(updatedGradientString).equal('linear-gradient(180deg, #000000, #ffffff)');
    });
    test('updateGradientDirection(): With text direction', () => {
      const updatedGradientString = updateGradientDirection({
        gradientStr: TEST_GRADIENT_STRING,
        direction: 'to bottom'
      });
      expect(updatedGradientString).equal('linear-gradient(to bottom, #000000, #ffffff)');
    });
  });

  describe('extractGradientDirectionNumber()', () => {
    test('extractGradientDirectionNumber(): Missing gradient string', () => {
      const directionNumber = extractGradientDirectionNumber({ gradientStr: null });
      expect(directionNumber).equal(DEFAULT_GRADIENT_DIRECTION);
    });
    test('extractGradientDirectionNumber(): Dir is extracted as number', () => {
      const directionNumber = extractGradientDirectionNumber({ gradientStr: TEST_GRADIENT_STRING });
      expect(directionNumber).equal(120);
    });
    test('extractGradientDirectionNumber(): Invalid gradient string returns default', () => {
      const directionNumber = extractGradientDirectionNumber({ gradientStr: 'linear-gradient' });
      expect(directionNumber).equal(DEFAULT_GRADIENT_DIRECTION);
    });
  });
});
