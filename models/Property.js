const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        default: 0
    }

});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;