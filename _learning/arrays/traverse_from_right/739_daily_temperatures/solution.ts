// Brute Force
function dailyTemperatures(temperatures: number[]): number[] {
  const length = temperatures.length;
  const res = Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    let j = i + 1;
    let counter = 0;

    while (j < length) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = counter + 1;
        break;
      } else {
        counter++;
        j++;
      }
    }
  }
  return res;
}

// Stack Based Solution
function dailyTemperaturesStack(temperatures: number[]): number[] {
  const length = temperatures.length;
  const res = Array(length).fill(0);
  const stack: any = []; // [[temp, index]]

  for (let i = 0; i < length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      const [stackT, stackIdx] = stack.pop();
      res[stackIdx] = i - stackIdx;
    }
    stack.push([temperatures[i], i]);
  }

  return res;
}

// Dynamic Programming (Reverse Traversal)
function dailyTemperaturesDynamic(temperatures: number[]): number[] {
  const length = temperatures.length;
  const res = Array(length).fill(0);

  for (let i = length - 2; i >= 0; i--) {
    let j = i + 1;

    while (j < length && temperatures[j] <= temperatures[i]) {
      if (res[j] === 0) {
        j = length;
        break;
      }
      j += res[j];
    }

    if (j < length) {
      res[i] = j - i;
    }
  }
  return res;
}
