const router = require('express').Router();
const Student = require('../db/models/student')

router.get('/', async (req, res, next) => {
  try {
    let student = await Student.findAll();
    await res.status(200).json(student);

  }
  catch(error){
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try{
   
    let student = await Student.findById(req.params.id);
    if (student){
      await res.json(student)
    } 
    else {
      await res.sendStatus(404)
    }
  }
  catch(error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log('reqbo', req.body) //reqbo { firstName: 'SQL', lastName: 'PRK', email: 'sqlprk@db.com' }
    console.log('reqparm', req.params)
    let student = await Student.create(req.body)
    await res.status(201).json(student)
  }
  catch(error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  //2 parts: 1) findbyid (what the person is updating), 2) the 
  try {
    console.log("body", req.body) //body { firstName: 'Salty' }
    console.log("params", req.params) //params { id: '14' }
    let student = await Student.findById(req.params.id)
    await student.update(req.body)
   
    await res.status(200).json(student)
  }
  catch (error){
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.id);
    await student.destroy(req.body);

    await res.sendStatus(204)

  }
  catch(error){
    next(error)
  }
})




module.exports = router;
