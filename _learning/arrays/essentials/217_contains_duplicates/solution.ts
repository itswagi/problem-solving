function containsDuplicate(nums: number[]): boolean {
  // Set Length Comapre
  // const unique = new Set(nums)
  // return unique.size !== nums.length

  // Hash Set Approach
  // const mp = new Map()
  // for(let i = 0; i < nums.length; i++) {
  //     if(mp.has(nums[i])) {
  //         return true
  //     }
  //     mp.set(nums[i], 1)
  // }
  // return false

  // Sorting Approach
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
}
