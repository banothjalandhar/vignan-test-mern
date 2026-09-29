import { useState } from "react";

function Home() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        const property = {
            name: name,
            location: location,
            price: price
        };

        const response = await fetch(
            "http://localhost:5000/api/properties",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(property)
            }
        );

        const data = await response.json();

        console.log(data);
    }

    return (

        <div>

            <h1>Add Airbnb Property</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Property Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Property
                </button>

            </form>

        </div>
    );
}

export default Home;