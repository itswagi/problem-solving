/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    //if current is smaller than next
    if (nums[i] < nums[i + 1]) {
      continue;
    }
    // if next is smaller than current
    let currCounter = i;
    while (nums[currCounter] > nums[currCounter + 1]) {
      const temp = nums[currCounter];
      nums[currCounter] = nums[currCounter + 1];
      nums[currCounter + 1] = temp;
      currCounter--;
    }
  }
}
