import "math"

func maxArea(height []int) int {
    max := 0

    l:= 0
    r:= len(height) - 1

    for l < r {
        area := math.Min(float64(height[l]), float64(height[r])) * float64(r-l)
        max = int(math.Max(float64(max), area))
        if height[l] < height[r] {
            l++
        } else {
            r--
        }
    }
    return max
}

// Brute Force
// func maxArea(height []int) int {
//     max := 0

//     for i, h := range height {
//         for j := i + 1; j < len(height); j++ {
//             minHeight := math.Min(float64(h), float64(height[j]))
//             area := (j - i) * int(minHeight)
//             max = int(math.Max(float64(max), float64(area)))
//         }
//     }
//     return max
// }