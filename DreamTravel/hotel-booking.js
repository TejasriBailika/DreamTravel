 // Sample hotel data
const hotels = {
    "Taj Mahal": [
        { name: "Taj View Hotel", price: 5000, description: "A luxurious hotel with a view of the Taj Mahal.", amenities: "Free Wi-Fi, Pool, Spa", rating: "4.5", image: "taj-view.jpg" },
        { name: "Mumtaz Hotel", price: 3000, description: "Affordable stay with a beautiful view of the Taj.", amenities: "Free Wi-Fi, Breakfast", rating: "4.0", image: "mumtaz-hotel.jpg" },
        { name: "The Oberoi Amarvilas", price: 12000, description: "Experience royal luxury near the Taj Mahal.", amenities: "Pool, Spa, Gym", rating: "5.0", image: "oberoi-amarvilas.jpg" }
    ],
    // Add other landmarks and hotels here...
};

// Function to populate hotels based on landmark selection
function loadHotels() {
    const landmark = document.getElementById("landmark").value;
    const hotelList = document.getElementById("hotel-list");
    hotelList.innerHTML = ""; // Clear previous results

    if (landmark && hotels[landmark]) {
        hotels[landmark].forEach(hotel => {
            const hotelCard = document.createElement("div");
            hotelCard.classList.add("hotel-card");
            hotelCard.innerHTML = `
                <img src="${hotel.image}" alt="${hotel.name}">
                <h3>${hotel.name}</h3>
                <p class="price">₹${hotel.price} per night</p>
            `;
            hotelCard.addEventListener("click", () => showHotelDetails(hotel));
            hotelList.appendChild(hotelCard);
        });
    }
}

// Function to show hotel details in the modal
function showHotelDetails(hotel) {
    document.getElementById("hotelName").textContent = hotel.name;
    document.getElementById("hotelDescription").textContent = hotel.description;
    document.getElementById("hotelAmenities").textContent = hotel.amenities;
    document.getElementById("hotelRating").textContent = hotel.rating;
    document.getElementById("hotelPrice").textContent = hotel.price;

    document.getElementById("hotelModal").style.display = "block";
}

// Close the modal when clicking the close button
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("hotelModal").style.display = "none";
});

// Event listener for the search form
document.getElementById("searchForm").addEventListener("submit", event => {
    event.preventDefault();
    loadHotels();
});
