import LinkedList from "./LinkedList.js";
let list = new LinkedList();

list.add(1);
list.add(1);
list.add(2);
list.add(3);
list.add(3);

const deleteDuplicates = (head) => {
    let current, prev = null;
    current = head;
    while (current) {
        if((prev!==null) && prev.val === current.val){
            prev.next = current.next;
        }
        prev = current;
        current = current.next;
    }
    return head;
}

console.log(deleteDuplicates(list.head))