import Node from "./Node.js";
export default class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current;
        // if LinkedList is empty, declare node to the this.head
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    addElements(elements) {
        elements.forEach((element, index) => {
            let node = new Node(element);
            let current;
            // if LinkedList is empty, declare node to the this.head
            if (this.head === null) {
                this.head = node;
            } else {
                current = this.head;

                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        })
    }
    insertAt(element, location) {
        if (location < 0 || location > this.size) {
            return console.log("Please enter a valid index")
        }
        let node = new Node(element);
        let current, previous;
        current = this.head;

        if (location === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            current = this.head;
            while (location--) {
                previous = current;
                current = current.next;
            }

            node.next = current;
            previous.next = node;
        }
        this.size++;
    }
    removeFrom(location) {
        if (location < 0 || location >= this.size) {
            return console.log("Please enter a valid index")
        }
        let current, previous;
        current = this.head;
        if (location === 0) {
            this.head = current.next;
        } else {
            while (location--) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size++;
    }
    removeElement(element) {
        let current = this.head;
        let prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.val === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    indexOf(element) {
        let count = 0;
        let current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.val === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }
    isEmpty() {
        return this.size == 0;
    }
    size_of_list() {
        console.log(this.size);
    }
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.val + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}