document.getElementById('foodForm').addEventListener('submit', addDistribution);

function addDistribution(e) {
    e.preventDefault();

    // Get form values
    const foodItem = document.getElementById('foodItem').value;
    const squantity = document.getElementById('squantity').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const totalCost = document.getElementById('totalCost').value;

    // Create new table row
    const row = document.createElement('tr');

    // Create cells and append to row
    row.innerHTML = `
        <td>${foodItem}</td>
        <td>${squantity}</td>
        <td>${date}</td>
        <td>${location}</td>
        <td>${totalCost}</td>
    `;

    // Append row to table
    document.querySelector('#distributionTable tbody').appendChild(row);

    // Clear form
    document.getElementById('foodForm').reset();
}
