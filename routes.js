const express = require('express');
const model = require('../model/model');
const router = express.Router();
const Employeedata = require('../model/employee')
router.post('/posts', async (req, res) => {
    // res.send('Data form post');
    console.log(req.body);
    const data = new model({
        student_name:req.body.name,
        student_age:req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
})
router.get('/getAll', async(req,res)=>{
    // res.send('Data form getAll');
    try{
        const data = await model.find();
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

router.put('/updateById:id',(req,res)=>{
    res.send(req.params.id);
})

router.delete('/deleteById:id',(req,res)=>{
    res.send(req.params.id);
})

router.post('/addemployee',(req,res)=>{
    const empdata = new Employeedata({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        salary:req.body.salary
    })
    try{
        const dataToSave = empdata.save();
        res.status(200).json(dataToSave);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

router.get('/getallemployee', async(req,res)=>{
    try{
        const empdata = await Employeedata.find();
        res.json(empdata);
        console.log(empdata.map(empdata => empdata.name));
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

router.delete('/deleteemployee:id', async (req, res) => {
    try {
        const id = req.params.id;
        const empdata = await Employeedata.findByIdAndDelete(id);
        if (!empdata) {
            return res.status(404).send('Employee not found');
        }
        return res.send(`Name with ${empdata.name} deleted`);
    } catch (err) {
        console.log(err);
        if (!res.headersSent) {
            return res.status(500).json({ message: err.message });
        }
    }
});

router.put('/updateemployee:id', async (req, res) => {
    try {
        const id = req.params.id;
        const empdata = await Employeedata.findByIdAndUpdate(id,req.body);
        if (!empdata) {
            return res.status(404).send('Employee not found');
        }
        return res.send(`Name with ${empdata.name} updated`);
    } catch (err) {
        console.log(err);
        if (!res.headersSent) {
            return res.status(500).json({ message: err.message });
        }
    }
});


router.delete('/deleteemploy:id',async (req, res) => {
    try {
        const id = req.params.id;
        const empdata = await Employeedata.findByIdAndDelete(id);
        if (!empdata) {
            return res.status(404).send('Employee not found');
        }
        return res.send(`Name with ${empdata.name} deleted`);
    } catch (err) {
        console.log(err);
        if (!res.headersSent) {
            return res.status(500).json({ message: err.message });
        }
    }
});
module.exports = router;