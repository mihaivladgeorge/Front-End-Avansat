const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: Array },
        dimensions: { type: String },
        price: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);