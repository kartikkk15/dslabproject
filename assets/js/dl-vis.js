class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.render();
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.render();
    }

    insertAtNode(data, position) {
        const newNode = new Node(data);
        if (position === 0) {
            this.insertAtHead(data);
            return;
        }
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            if (current.next === null) break;
            current = current.next;
        }
        newNode.next = current.next;
        newNode.prev = current;
        if (current.next) {
            current.next.prev = newNode;
        }
        current.next = newNode;
        if (newNode.next === null) {
            this.tail = newNode;
        }
        this.render();
    }

    removeElement(data) {
        if (!this.head) return;
        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next; // Node to remove is head
                }
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev; // Node to remove is tail
                }
                this.render();
                return;
            }
            current = current.next;
        }
        alert("Element not found.");
    }

    searchElement(data) {
        if (!this.head) return;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                alert(`Element ${data} found.`);
                this.highlightNode(current);
                return;
            }
            current = current.next;
        }
        alert("Element not found.");
    }

    highlightNode(node) {
        const nodes = document.querySelectorAll('.node');
        nodes.forEach(n => {
            if (n.textContent === node.data) {
                n.style.backgroundColor = '#ffeb3b';
            } else {
                n.style.backgroundColor = '#ffffff';
            }
        });
    }

    render() {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';
        if (!this.head) return;

        let current = this.head;
        while (current) {
            const nodeDiv = document.createElement('div');
            nodeDiv.classList.add('node');
            nodeDiv.textContent = current.data;
            listContainer.appendChild(nodeDiv);

            if (current.next) {
                const arrowDiv = document.createElement('div');
                arrowDiv.classList.add('arrow');
                nodeDiv.appendChild(arrowDiv);
            }
            current = current.next;
        }
    }
}

const list = new DoublyLinkedList();

function insertAtHead() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        list.insertAtHead(value);
        document.getElementById('valueInput').value = '';
    }
}

function insertAtTail() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        list.insertAtTail(value);
        document.getElementById('valueInput').value = '';
    }
}

function insertAtNode() {
    const value = document.getElementById('valueInput').value;
    const position = parseInt(document.getElementById('positionInput').value);
    if (value) {
        list.insertAtNode(value, position);
        document.getElementById('valueInput').value = '';
        document.getElementById('positionInput').value = '';
    }
}

function removeElement() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        list.removeElement(value);
        document.getElementById('valueInput').value = '';
    }
}

function searchElement() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        list.searchElement(value);
        document.getElementById('valueInput').value = '';
    }
}
