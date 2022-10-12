import LinkedList from "./LinkedList.js";

let headA = new LinkedList();
headA.add(4);
headA.add(1);
headA.add(8);
headA.add(4);
headA.add(5);

let headB = new LinkedList();
headB.add(5);
headB.add(6);
headB.add(1);
headB.add(8);
headB.add(4);
headB.add(5);

const getInstersectionNode = (headA, headB) => {
    let map = new Map();
    let index = 0;
    let current = headA
    while (current) {
        map.set(current, index);
        index++;
        current = current.next;
    }
    let currentB = headB;
    while (currentB) {
        if (map.has(currentB)) {
            return currentB;
        }
        currentB = currentB.next;
    }
    return null;
}

console.log(getInstersectionNode(headA, headB));