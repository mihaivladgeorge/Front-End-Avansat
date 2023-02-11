const router = require("express").Router();
const Car = require("../models/Car");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newCar = new Car(req.body);

    try {
        const savedCar = await newCar.save();
        res.status(200).json(savedCar);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) =>{

    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },
        {new:true}
        );
    res.status(200).json(updatedCar);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).json("Car deleted");
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.status(200).json(car);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    const categoryQuery = req.query.category;

    try {
        let cars;
        if (categoryQuery) {
            cars = await Car.find({
                category: {
                    $in: [categoryQuery],
                },
            });
        }
        else {
            cars = await Car.find();
        }

        res.status(200).json(cars);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;