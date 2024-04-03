const express = require('express');
const router  = express.Router();
const Person = require('../model/person');


router.post('/', async(req, res) => {
    try {
      const data = req.body;
      const newperson = new Person(data);
      const response = await newperson.save();
      console.log("saved succesfully");
      res.send("Saved Successfully");
    } catch(err) {
      console.log(err);
      res.send("Internal server Error");
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const newperson = await Person.find();
  
      console.log("fetch succesfully");
      res.send(newperson);
    } catch(err) {
      console.log(err);
      res.send("Internal server Error");
    }
  });
  
  router.get('/:workType', async (req, res) => {
    try{
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter') {
        const response = await Person.find({post: workType});
        res.send(response);
      }
    } catch(err) {
      res.send("Internel server error");
    }
   
  })

router.put('/:id', async (req, res) => {
    try {
        const personId  = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData , {
            new: true,
            runValidators:true
        })
        res.send(response);
    } catch(err) {
        console.log("erroe");
    }
})

module.exports = router;