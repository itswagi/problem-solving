package main

type TrieNode struct {
    children map[rune]*TrieNode
    endOfWord bool
}

type Trie struct {
    root *TrieNode
}


func Constructor() Trie {
	return Trie{root: &TrieNode{children: make(map[rune]*TrieNode), endOfWord: false}}
}


func (this *Trie) Insert(word string)  {
	node := this.root
    for _, ch := range word {
		if _, exists := node.children[ch]; !exists {
			node.children[ch] = &TrieNode{
				children: make(map[rune]*TrieNode), endOfWord: false,
			}
		}
		node = node.children[ch]
	}
	node.endOfWord = true
}


func (this *Trie) Search(word string) bool {
    node := this.root
	for _, ch := range word {
		if _, exists := node.children[ch]; !exists {
			return false
		}
		node = node.children[ch]
	}
	return node.endOfWord
}


func (this *Trie) StartsWith(prefix string) bool {
    node := this.root
	for _, ch := range prefix {
		if _, exists := node.children[ch]; !exists {
			return false
		}
		node = node.children[ch]
	}
	return true
}
