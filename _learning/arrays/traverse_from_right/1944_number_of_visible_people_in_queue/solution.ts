// Brute Force
function canSeePersonsCount(heights: number[]): number[] {
  const length = heights.length;
  const answer = Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    let j = i + 1;

    let maxSubHeight = 0;
    while (j < length && heights[j] <= heights[i]) {
      if (heights[j] > maxSubHeight) {
        answer[i]++;
      }
      maxSubHeight = Math.max(maxSubHeight, heights[j]);
      j++;
    }

    if (heights[j] >= heights[i]) {
      answer[i]++;
      continue;
    }
  }
  return answer;
}
// Stack Based
function canSeePersonsCountStack(heights: number[]): number[] {
  const length = heights.length;
  const answer = Array(length).fill(0);
  const stack: number[] = [];

  for (let i = length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < heights[i]) {
      stack.pop();
      answer[i]++;
    }

    if (stack.length) answer[i]++;

    stack.push(heights[i]);
  }

  return answer;
}
