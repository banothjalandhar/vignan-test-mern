import { useState } from "react";

function SearchBar() {

    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);

    function handleSubmit(e) {

        e.preventDefault();

        if (location === "") {
            alert("Location is required");
            return;
        }

        if (checkIn === "") {
            alert("Check-in date is required");
            return;
        }

        if (checkOut === "") {
            alert("Check-out date is required");
            return;
        }

        if (guests < 1) {
            alert("Guests must be at least 1");
            return;
        }

        alert(`Searching properties in ${location}`);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
            />

            <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
            />

            <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />

            <button type="submit">
                Search
            </button>

        </form>
    );
}

export default SearchBar;