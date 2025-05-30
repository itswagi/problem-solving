/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let mergePointer = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[mergePointer] = nums1[p1];
      p1--;
    } else {
      nums1[mergePointer] = nums2[p2];
      p2--;
    }
    mergePointer--;
  }
}
