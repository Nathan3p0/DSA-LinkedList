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

    remove(data) {
        if (!this.head) {
            console.log('There is nothing in this list. Get your -ish together. Thank you :)')
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous;
        while (current && current.data !== data) {
            previous = current;
            current = current.next;
        }
        if (current === null) {
            console.log('Data not Found to Remove');
            return;
        }
        previous.next = current.next;
        this.size--;
    }
    find(data) {
        if (!this.head) {
            console.log('There is nothing in this list. Get your -ish together. Thank you :)')
            return;
        }
        if (this.head.data === data) {
            console.log(this.head)
            return this.head;
        }

        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }
        if (current === null) {
            console.log('Data not Found');
            return;
        }
        console.log(current);
        return current;
    }
}

const myLinkedList = new LinkedList();
myLinkedList.remove(50);
myLinkedList.insertLast(50);
myLinkedList.remove(50);
myLinkedList.insertFirst(30);
myLinkedList.insertLast(70);
myLinkedList.find(10);
myLinkedList.remove(70);
myLinkedList.remove(20);

console.log(myLinkedList)