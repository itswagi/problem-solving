package main

import "unicode"

// Two Pointer
// func isPalindrome(s string) bool {
//    l, r := 0, len(s)-1

//     for l < r {
//         for l < r && !isAlphaNum(rune(s[l])) {
//             l++
//         }
//         for r > l && !isAlphaNum(rune(s[r])) {
//             r--
//         }
//         if unicode.ToLower(rune(s[l])) != unicode.ToLower(rune(s[r])) {
//             return false
//         }
//         l++
//         r--
//     }
//     return true
// }

// String Reversal
func isPalindrome(s string) bool {
    newStr := ""
    for _, c := range s {
        if ('a' <= c && c <= 'z') || ('0' <= c && c <= '9') {
            newStr += string(c)
        } else if 'A' <= c && c <= 'Z' {
            newStr += string(c + 'a' - 'A')
        }
    }

    reversedStr := reverse(newStr)
    return newStr == reversedStr
}

func reverse(s string) string {
    runes := []rune(s)
    n := len(runes)
    for i := 0; i < n/2; i++ {
        runes[i], runes[n-1-i] = runes[n-1-i], runes[i]
    }
    return string(runes)
}

func isAlphaNum(c rune) bool {
    return unicode.IsLetter(c) || unicode.IsDigit(c)
}