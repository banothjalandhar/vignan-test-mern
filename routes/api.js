const express = require("express");

const router = express.Router();

const Property = require("../models/Property");


// GET - Get all properties

router.get("/properties", (req, res, next) => {

    Property.find()
        .then((data) => {
            res.json(data);
        })
        .catch(next);

});


// GET - Get single property

router.get("/properties/:id", (req, res, next) => {

    Property.findById(req.params.id)
        .then((data) => {

            if (!data) {
                return res.status(404).json({
                    message: "Property not found"
                });
            }

            res.json(data);

        })
        .catch(next);

});


// POST - Create property

router.post("/properties", (req, res, next) => {

    Property.create(req.body)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(next);

});


// PUT - Update complete property

router.put("/properties/:id", (req, res, next) => {

    Property.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
        .then((data) => {

            if (!data) {
                return res.status(404).json({
                    message: "Property not found"
                });
            }

            res.json(data);

        })
        .catch(next);

});


// PATCH - Update partial property

router.patch("/properties/:id", (req, res, next) => {

    Property.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
        .then((data) => {

            if (!data) {
                return res.status(404).json({
                    message: "Property not found"
                });
            }

            res.json(data);

        })
        .catch(next);

});


// DELETE - Delete property

router.delete("/properties/:id", (req, res, next) => {

    Property.findByIdAndDelete(req.params.id)
        .then((data) => {

            if (!data) {
                return res.status(404).json({
                    message: "Property not found"
                });
            }

            res.json({
                message: "Property deleted successfully",
                property: data
            });

        })
        .catch(next);

});


module.exports = router;