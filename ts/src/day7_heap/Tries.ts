class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }

        node.isEndOfWord = true;
    }

    delete(word: string): void {
        this.deleteRecursively(this.root, word, 0);
    }

    private deleteRecursively(
        node: TrieNode,
        word: string,
        index: number,
    ): boolean {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                // Word not found in the Trie
                return false;
            }
            node.isEndOfWord = false;
            return node.children.size === 0; // Return true if this node has no other children
        }

        const char = word[index];
        if (!node.children.has(char)) {
            // Word not found in the Trie
            return false;
        }

        const shouldDeleteChild = this.deleteRecursively(
            node.children.get(char)!,
            word,
            index + 1,
        );

        if (shouldDeleteChild) {
            node.children.delete(char);
            return node.children.size === 0; // Return true if this node has no other children
        }

        return false;
    }
}

// Usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");

console.log("Before Deletion:");
console.log(trie.root); // Trie structure

trie.delete("app");

console.log("After Deletion:");
console.log(trie.root); // Trie structure
