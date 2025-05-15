function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set();
  let res = 0,
    l = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]); // this moves the left pointer forward until the duplicate is removed
      l++;
    }
    charSet.add(s[r]);
    res = Math.max(res, r - l + 1); // add 1 for inclusive
  }
  return res;
}
