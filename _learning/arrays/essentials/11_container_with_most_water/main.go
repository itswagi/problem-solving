package main

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func maxArea(height []int) int {
    res := 0

    l:= 0
    r:= len(height) - 1

    for l < r {
        area := min(height[l], height[r]) * (r-l)
        res = max(res, area)
        if height[l] < height[r] {
            l++
        } else {
            r--
        }
    }
    return res
}


// Brute Force
// func maxArea(height []int) int {
//     res := 0

//     for i, h := range height {
//         for j := i + 1; j < len(height); j++ {
//             minHeight := min(h, height[j])
//             area := (j - i) * minHeight
//             res = max(res, area)
//         }
//     }
//     return res
// }