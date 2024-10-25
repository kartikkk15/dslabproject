const tableSize = 10;
let hashTable = Array(tableSize).fill(null);

window.onload = () => {
  createHashTable();
};

function createHashTable() {
  const tableContainer = document.getElementById('hash-table');
  tableContainer.innerHTML = '';
  
  for (let i = 0; i < tableSize; i++) {
    const slot = document.createElement('div');
    slot.classList.add('slot');
    slot.id = `slot-${i}`;
    slot.textContent = i;
    tableContainer.appendChild(slot);
  }
}

function insert() {
  const value = document.getElementById('data-input').value;
  if (value === '') {
    alert('Please enter a number');
    return;
  }
  
  const hash = value % tableSize;
  let position = hash;
  
  // Update the hash logic display
  document.getElementById('hash-details').textContent = `Hashing value: ${value} -> ${value} % ${tableSize} = ${hash}`;
  
  // Linear probing for collision resolution
  while (hashTable[position] !== null) {
    position = (position + 1) % tableSize;
  }
  
  hashTable[position] = value;
  updateTable();
}

function updateTable() {
  for (let i = 0; i < tableSize; i++) {
    const slot = document.getElementById(`slot-${i}`);
    if (hashTable[i] !== null) {
      slot.textContent = hashTable[i];
      slot.classList.add('filled');
    } else {
      slot.textContent = i;
      slot.classList.remove('filled');
    }
  }
}
