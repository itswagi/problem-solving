package main

func maxSlidingWindow(nums []int, k int) []int {
	q := []int {};
	output := []int {};
	l, r := 0, 0

	for r < len(nums) {
		for len(q) > 0 && nums[q[len(q) - 1]] < nums[r] {
			q = q[:1]
		}

		q = append(q, r)

		if l > q[0] {
			q = q[1:];
		}

		if (r + 1) >= k {
			output = append(output, nums[q[0]])
			l++
		}
		r++
	}
	return output
}

func maxSlidingWindow(nums []int, k int) []int {
	res := []int {}

    for i := 0; i <= len(nums) - k; i++ {
        currMax := nums[i]

        for j := 0; j < k; j++ {
            currMax = max(currMax, nums[i+j])
        }

        res = append(res, currMax)
    }
    return res
}


func max(a, b int) int {
    if(a < b) {
        return b
    }
    return a
}