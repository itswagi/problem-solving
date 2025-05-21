// Kadane's Algorithm
function maxSubArray(nums: number[]): number {
    let maxSum = nums[0]
    let currSum = 0

    for(let i = 0; i < nums.length; i++) {
        if(currSum < 0) {
            currSum = 0
        }
        currSum += nums[i]
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
};
