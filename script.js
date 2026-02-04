// Simulated real-time donor database
const donors = [
    {
        name: "Arun Kumar",
        blood: "A+",
        location: "Chennai",
        phone: "9876543210",
        verified: true,
        available: true,
        lastDonation: "4 months ago"
    },
    {
        name: "Priya Sharma",
        blood: "O+",
        location: "Chennai",
        phone: "9123456789",
        verified: true,
        available: true,
        lastDonation: "3 months ago"
    },
    {
        name: "Rahul Verma",
        blood: "B+",
        location: "Bangalore",
        phone: "9988776655",
        verified: true,
        available: true,
        lastDonation: "5 months ago"
    }
];

function searchDonor() {
    const bloodGroup = document.getElementById("bloodGroup").value;
    const locationInput = document.getElementById("location").value.toLowerCase();
    const donorList = document.getElementById("donorList");

    donorList.innerHTML = "";

    if (bloodGroup === "") {
        donorList.innerHTML = "<p>Please select a blood group.</p>";
        return;
    }

    const result = donors.filter(donor => {
        const locationMatch =
            locationInput === "" ||
            donor.location.toLowerCase().includes(locationInput);

        return (
            donor.blood === bloodGroup &&
            donor.verified &&
            donor.available &&
            locationMatch
        );
    });

    if (result.length === 0) {
        donorList.innerHTML = "<p>No verified donors available right now.</p>";
        return;
    }

    result.forEach(donor => {
        donorList.innerHTML += `
            <div class="donor-card">
                <h3>${donor.name} ✅</h3>
                <p><strong>Blood Group:</strong> ${donor.blood}</p>
                <p><strong>Location:</strong> ${donor.location}</p>
                <p><strong>Last Donation:</strong> ${donor.lastDonation}</p>
                <p class="status">🟢 Available (Real-time)</p>

                <a href="tel:${donor.phone}" class="btn call">📞 Call</a>
                <a href="sms:${donor.phone}" class="btn msg">💬 Message</a>
            </div>
        `;
    });
}

// Emergency Alert — shows all verified & available donors
function sendEmergency() {
    const donorList = document.getElementById("donorList");
    donorList.innerHTML = "";

    const emergencyDonors = donors.filter(
        donor => donor.verified && donor.available
    );

    emergencyDonors.forEach(donor => {
        donorList.innerHTML += `
            <div class="donor-card">
                <h3>${donor.name} 🚨</h3>
                <p><strong>Blood Group:</strong> ${donor.blood}</p>
                <p><strong>Location:</strong> ${donor.location}</p>

                <a href="tel:${donor.phone}" class="btn call">📞 Call</a>
                <a href="sms:${donor.phone}" class="btn msg">💬 Message</a>
            </div>
        `;
    });

    alert("🚨 Emergency alert sent to all verified donors!");
}