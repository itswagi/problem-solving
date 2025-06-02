class TrieNode {
  children: Map<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.endOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node: TrieNode = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.endOfWord = true;
  }

  search(word: string): boolean {
    let node: TrieNode = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }

    return node.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let node: TrieNode = this.root;

    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }

    return true;
  }
}
