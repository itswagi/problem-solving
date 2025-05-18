function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans: number[][] = [];

  ans.push(intervals[0]);

  for (const val of intervals) {
    const length = ans.length;
    if (val[0] <= ans[length - 1][1]) {
      ans[length - 1] = [
        ans[ans.length - 1][0],
        Math.max(ans[ans.length - 1][1], val[1]),
      ];
    } else {
      ans.push(val);
    }
  }
  return ans;
}

//Sweep Line Algorithm
function mergeSLA(intervals: number[][]): number[][] {
  const mp = new Map();

  for (const interval of intervals) {
    const start = interval[0];
    const end = interval[1];
    mp.set(start, (mp.get(start) || 0) + 1);
    mp.set(end, (mp.get(end) || 0) - 1);
  }

  const sortedKeys: number[] = Array.from(mp.keys()).sort((a, b) => a - b);

  let has = 0;
  let interval: number[] = [];
  const res: number[][] = [];

  for (const key of sortedKeys) {
    if (interval.length === 0) {
      interval.push(key);
    }
    has += mp.get(key);

    if (has === 0) {
      interval.push(key);
      res.push(interval);
      interval = [];
    }
  }
  return res;
}
