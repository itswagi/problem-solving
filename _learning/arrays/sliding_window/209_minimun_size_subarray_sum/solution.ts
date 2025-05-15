function minSubArrayLen(target: number, nums: number[]): number {
  const length = nums.length;
  let minLength = length + 1;
  let currentSum = 0;

  for (let start = 0, end = 0; start < length; start++) {
    currentSum += nums[start];

    while (currentSum >= target) {
      minLength = Math.min(minLength, start - end + 1);
      currentSum -= nums[end];
      end++;
    }
  }
  return minLength === length + 1 ? 0 : minLength;
}
