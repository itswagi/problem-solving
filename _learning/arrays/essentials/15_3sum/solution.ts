function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r];

      if (threeSum > 0) r--;
      else if (threeSum < 0) l++;
      else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }
  return res;

  // Brute Force
  // const res = new Set<string>()
  // nums.sort((a,b) => a-b)

  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         for(let k = j+1; k<nums.length; k++) {
  //             if(i != j && j != k && nums[i] + nums[j] + nums[k] === 0) {
  //                 res.add(JSON.stringify([nums[i], nums[j], nums[k]]))
  //             }
  //         }
  //     }
  // }

  // return Array.from(res).map(item => JSON.parse(item));
}
