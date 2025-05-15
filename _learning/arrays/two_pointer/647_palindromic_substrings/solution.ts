function countSubstrings(s: string): number {
    let res = 0;

    for(let i = 0; i < s.length; i++) {
        let l = i
        let r = i

        // for odd position palidromes
        res += countPalindromes(s, i, i)

        // for even position palindromes
        res += countPalindromes(s, i, i + 1)
    }
    return res
};

function countPalindromes(s: string, l: number, r: number): number {
    let res = 0
    while(l >= 0 && r < s.length && s[l] === s[r]) {
            res += 1;
            l -= 1;
            r+= 1;
        }
    return res
}
