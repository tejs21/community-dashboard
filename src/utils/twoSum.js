/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]} 
 */
export function twoSum(nums, target) {
  const map = {}; 

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[currentNum] = i;
  }

  return [];
}