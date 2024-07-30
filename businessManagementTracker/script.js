document.getElementById('businessForm').addEventListener('submit', addRecord);

function addRecord(e) {
    e.preventDefault();

    // Get form values
    const personName = document.getElementById('personName').value;
    const item = document.getElementById('item').value;
    const totalAmount = document.getElementById('totalAmount').value;
    const expectedSales = document.getElementById('expectedSales').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Create new table row
    const row = document.createElement('tr');

    // Create cells and append to row
    row.innerHTML = `
        <td>${personName}</td>
        <td>${item}</td>
        <td>${totalAmount}</td>
        <td>${expectedSales}</td>
        <td>${address}</td>
        <td>${age}</td>
        <td>${gender}</td>
    `;

    // Append row to table
    document.querySelector('#recordsTable tbody').appendChild(row);

    // Clear form
    document.getElementById('businessForm').reset();
}
