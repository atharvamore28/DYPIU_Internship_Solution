document.getElementById('plantationForm').addEventListener('submit', addRecord);

let totalTrees = 0;
let totalCost = 0;

function addRecord(e) {
    e.preventDefault();

    // Get form values
    const volunteerName = document.getElementById('volunteerName').value;
    const volunteerAge = document.getElementById('volunteerAge').value;
    const saplingName = document.getElementById('saplingName').value;
    const saplingCost = document.getElementById('saplingCost').value;
    const driveDate = document.getElementById('driveDate').value;

    // Create new table row
    const row = document.createElement('tr');

    // Create cells and append to row
    row.innerHTML = `
        <td>${volunteerName}</td>
        <td>${volunteerAge}</td>
        <td>${saplingName}</td>
        <td>${saplingCost}</td>
        <td>${driveDate}</td>
    `;

    // Append row to table
    document.querySelector('#recordsTable tbody').appendChild(row);

    // Update summary
    totalTrees++;
    totalCost += parseFloat(saplingCost);

    document.getElementById('totalTrees').innerText = totalTrees;
    document.getElementById('totalCost').innerText = totalCost;

    // Clear form
    document.getElementById('plantationForm').reset();
}
