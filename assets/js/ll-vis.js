// Linked list represented as an array
let linkedList = [];

// Function to visualize the linked list
function displayLinkedList() {
    const listContainer = document.querySelector('.linked-list');
    listContainer.innerHTML = ''; // Clear previous display

    // Create and append each node
    linkedList.forEach((value, index) => {
        const nodeElement = document.createElement('div');
        nodeElement.classList.add('node');
        nodeElement.innerText = value;
        listContainer.appendChild(nodeElement);
    });
}

// Function to add a node
function addNode() {
    const nodeValue = document.getElementById('nodeValue').value;

    if (nodeValue) {
        linkedList.push(nodeValue); // Add value to the linked list
        displayLinkedList(); // Update the visual representation
        document.getElementById('nodeValue').value = ''; // Clear input
    } else {
        alert('Please enter a value');
    }
}

// Function to remove the last node
function removeNode() {
    if (linkedList.length > 0) {
        linkedList.pop(); // Remove last element
        displayLinkedList(); // Update the visual representation
    } else {
        alert('No more nodes to remove');
    }
}

// Initial display (Empty list)
displayLinkedList();
