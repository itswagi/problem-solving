function twoSum(numbers: number[], target: number) {
  // Hash map approach
  const mp = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const temp = target - numbers[i];
    if (mp.has(temp)) return [mp.get(temp), i + 1];
    mp.set(numbers[i], i + 1);
  }

  // Two Pointer Approach
  //   let l = 0;
  // let r = numbers.length - 1

  // while(l < r) {
  //     const currSum = numbers[l] + numbers[r]
  //     if(currSum > target) r--
  //     else if (currSum < target) l++
  //     else return [l + 1, r+ 1]
  // }
}
