const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/properties", (req, res) => {

    const property = req.body;

    console.log(property);

    res.json({
        message: "Property added successfully",
        property: property
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});