class Node {
    value = null;
    nextNode = null;

    constructor(val, next) {
        this.value = val;
        this.nextNode = next;
    }
}

class LinkedList {
    head = null;
    tail = null;

    append(value) {
        const node = new Node(value, null);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.nextNode = node;
            this.tail = node;
        }
    }
    
    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
    }

    size() {
        let size = 0;
        let list = this.head;
        while (list) {
            size++;
            list = list.nextNode;
        }
        return size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let list = this.head;
        for (let i = 0; i < index; i++) {
            list = list.nextNode;
        }
        try {
            return list.value;
        }
        catch(err) {
            return "ERROR: OUT OF BOUNDS";
        }
    }

    pop() {
        let list = this.head;
        for (let i = 0; i < this.size()-2; i++) {
            list = list.nextNode;
        }
        this.tail = list;
        this.tail.nextNode = null;        
    }

    contains(value) {
        let list = this.head;
        while (list) {
            if (list.value === value) {
                return true;
            }
            list = list.nextNode;
        }
        return false;
    }

    find(value) {
        let list = this.head;
        let i = 0;
        while (list) {
            if (list.value === value) {
                return i;
            }
            list = list.nextNode;
            i++;
        }
        return -1;
    }

    toString() {
        let list = this.head;
        let string = "";
        while (list) {
            string += `( ${list.value} )`;
            list = list.nextNode;
            if (list) {
                string += " -> ";
            }
        }
        return string;
    }

    insertAt(value, index) {
        let list = this.head;
        let prevNode, nextNode;

        let i = 0;
        while (list) {
            if (i+1 === index) {
                prevNode = list;
            }
            else if (i === index) {
                nextNode = list;
                break;
            }
            list = list.nextNode;
            i++;
        }

        const node = new Node(value, nextNode);
        prevNode.nextNode = node;
    }

    removeAt(index) {
        let list = this.head;
        let prevNode, curNode, nextNode;

        let i = 0;
        while (list) {
            if (i+1 === index) {
                prevNode = list;
            }
            else if (i === index) {
                curNode = list;
                list = list.nextNode;
                nextNode = list;
                break;
            }
            list = list.nextNode;
            i++;
        }
        curNode.nextNode = null;
        prevNode.nextNode = nextNode;
    }
}




// Testing
const list = new LinkedList();
list.append(5);                         // 5
list.append(6);                         // 5 -> 6
list.prepend(2131);                     // 2131 -> 5 -> 6
list.append(1);                         // 2131 -> 5 -> 6 -> 1
list.prepend(21);                       // 21 -> 2131 -> 5 -> 6 -> 1
list.pop();                             // 21 -> 2131 -> 5 -> 6
list.insertAt(200, 2);                  // 21 -> 2131 -> 200 -> 5 -> 6
list.removeAt(1);                       // 21 -> 200 -> 5 -> 6


// console.log(list.find(5));           // 2
// console.log(list.contains(21));      // true
// console.log(list.contains(2131));    // false
// console.log(list.at(0));             // 21

console.log(list.toString());           // ( 21 ) -> ( 200 ) -> ( 5 ) -> ( 6 )
