function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    //pre
    //recurse
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);
    //post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);

    return path;
}