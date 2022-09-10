const express = require('express');
const Model = require('../models/model');
const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        ip: req.body.ip
       
    })
    console.log(req.body);

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete', (req, res) => {
    Model.deleteMany({}, ()=>{
        res.send('All deleted')
    })
})

module.exports = router;