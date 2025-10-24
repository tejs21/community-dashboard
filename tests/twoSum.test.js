import { twoSum } from '@/utils/twoSum';

describe('twoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('should return an empty array if no two numbers add up to the target', () => {
    const nums = [3, 2, 4];
    const target = 10;
    expect(twoSum(nums, target)).toEqual([]);
  });

  it('should handle negative numbers correctly', () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;
    expect(twoSum(nums, target)).toEqual([0, 2]);
  });

  it('should handle duplicate numbers correctly', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});