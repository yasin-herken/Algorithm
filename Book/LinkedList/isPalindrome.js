import LinkedList from "./LinkedList.js";
let list = new LinkedList();

list.add(1);
list.add(2);
const reverseLinkedList = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedList(next, head);
}
const isPalindrome = (head) => {
    let slow = head, fast = head, prev;

    // two pointer technique to find middle
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next;
    prev = reverseLinkedList(slow);
    fast = head, slow = prev;
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true;
}

console.log(isPalindrome(list.head))