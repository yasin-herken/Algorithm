import LinkedList from "./LinkedList.js";
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

const middleOfLinkedList = (list) => {
    let iterator = list.head;
    let count = 0;
    while(iterator) {
        count++;
        iterator = iterator.next;
    }
    iterator = list.head;
    count = Math.floor(count / 2);
    while(count--) {
        iterator = iterator.next;
    }
console.log(iterator)
}

middleOfLinkedList(list)