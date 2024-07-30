document.getElementById('donationForm').addEventListener('submit', addRecord);

let totalDonors = 0;
let totalDonation = 0;

function addRecord(e) {
    e.preventDefault();

    // Get form values
    const donorName = document.getElementById('donorName').value;
    const gender = document.getElementById('gender').value;
    const birthday = document.getElementById('birthday').value;
    const donationDate = document.getElementById('donationDate').value;
    const donationAmount = document.getElementById('donationAmount').value;

    // Create new table row
    const row = document.createElement('tr');

    // Create cells and append to row
    row.innerHTML = `
        <td>${donorName}</td>
        <td>${gender}</td>
        <td>${birthday}</td>
        <td>${donationDate}</td>
        <td>${donationAmount}</td>
    `;

    // Append row to table
    document.querySelector('#recordsTable tbody').appendChild(row);

    // Update summary
    totalDonors++;
    totalDonation += parseFloat(donationAmount);

    document.getElementById('totalDonors').innerText = totalDonors;
    document.getElementById('totalDonation').innerText = totalDonation;

    // Clear form
    document.getElementById('donationForm').reset();
}
