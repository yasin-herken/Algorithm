import LinkedList from "./LinkedList.js";

const removeElements = (head, val) => {
    let curr = head.head, prev = null;
    while (curr) {
        if (curr.val === val) {
            if(prev ===null){
                curr = curr.next;
                head.head = curr;
                continue;
            }else {
                prev.next = curr.next;
                curr = curr.next;
                continue;
            }
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
}

let list = new LinkedList();
list.addElements([1,2,6,3,4,5,6]);
// list.addElements([]);
// list.addElements([7,7,7,7]);
// list.addElements([1,2,2,1]);
let val = 6; // remove elements
const node = removeElements(list, val)
node.printList();