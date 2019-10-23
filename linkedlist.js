class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        if (!this.head) {
            this.insertFirst(data);
        } else {
            let position = this.head;
            while (position.next) {
                position = position.next;
            }
            position.next = new Node(data)
            this.size++;
        }
    }
}

const myLinkedList = new LinkedList();

myLinkedList.insertLast(50);
myLinkedList.insertFirst(30);
myLinkedList.insertLast(70);

console.log(myLinkedList.head)