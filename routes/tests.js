const router = require('express').Router();
const Test = require('../db/models/test')
const Student = require('../db/models/student');

router.get('/', async (req, res, next) => {
  try {
    let test = await Test.findAll();
    res.status(200).send(test);

  }
  catch (error){
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let test = await Test.findById(req.params.id)
    await res.status(200).json(test)

  }
  catch (error) {
    next(error)
  }
})

router.post('/student/:studentId', async (req, res, next) => {
  try {
    //field in postico called studentId
    const test = await Test.create({...req.body, 
      studentId: req.params.studentId})
    //grabs all the keys the req.body has and sets it equal to whatever is in there 
    res.status(201).json(test)
  
  }
  catch (err) {
    next(err)
  }
  
})

router.delete('/:id', async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id);
    await test.destroy(req.body);

    res.sendStatus(204);
  }

  catch (error){
    next(error)
  }
})


module.exports = router;
