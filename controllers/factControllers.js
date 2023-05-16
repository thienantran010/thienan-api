const Fact = require('../models/factModel');

//Post Method
exports.post = async (req, res) => {
    const fact = new Fact({
        content: req.body.content
    });

    try {
        const factToSave = await fact.save();
        res.status(200).json(factToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

//Get all Method
exports.getAll = async (req, res) => {
    try{
        const facts = await Fact.find();
        res.json(facts);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

//Get by ID Method
exports.getOneById = async (req, res) => {
    try{
        const fact = await Fact.findById(req.params.id);
        res.json(fact);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

// Get random fact
exports.getOneRandom = async (req, res) => {
    try {
        const fact = await Fact.aggregate([{ $sample: { size: 1 } }]);
        res.json(fact);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
};

//Update by ID Method
exports.updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedContent = req.body;
        const options = { new: true };

        const result = await Fact.findByIdAndUpdate(
            id, updatedContent, options
        );

        res.json(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete by ID Method
exports.deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const fact = await Fact.findByIdAndDelete(id);
        res.send(`The following fact has been deleted: ${fact.content}`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};