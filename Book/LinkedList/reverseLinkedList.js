import LinkedList from "./LinkedList.js";

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

const reverseLinkedList = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedList(next, head);
}

console.log(reverseLinkedList(list.head));