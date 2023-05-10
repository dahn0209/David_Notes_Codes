const router = require("express").Router();


const listtoDo=[
  {"title":"Clean Up",
    "description":"clean up the room",
    "status": "In Progress",
    "priority": "Low"
},
{"title":"Eat",
"description":"eat steak",
"status": "Completed",
"priority": "High"
},
{"title":"Sleep",
"description":"Sleep forver",
"status": "In Progress",
"priority": "High"
}
];

router.get('/', async(req,res,next) => {
  try{
    const getListToDo=await listtoDo;    
    res.status(200).json(getListToDo);

  }catch(error){
    next(error)
  }
});

router.get('/:id', async(req, res,next) => {
  try{
    console.log('let look at req.params=>',parseInt(req.params.id))
    let eachId=await parseInt(req.params.id);
    console.log('eachId=>',eachId)
    const eachToDo=await listtoDo[eachId]
    res.status(200).json(eachToDo);
  }catch(error){
    res.status(500).json({ message: "Error" })
    next(error)
  }
});

router.post('/:id', async(req, res,next) => {
  try{

    const eachId=await parseInt(req.params.id);
    console.log('eachId in post=>',eachId);
    const timeStamp=await Date.now()

    const createToDo=await {
      title:req.body.title,
      description: req.body.description,
      status:req.body.status,
      priority:req.body.priority,
      timestamp:timeStamp
}
  await listtoDo.push(createToDo)
    res.status(201).json(createToDo);
  }catch(error){
    res.status(500).json({ message: "Error create" })
    next(error)
  }
});

router.put('/:id', async(req, res,next) => {
  try{
    const eachId=await parseInt(req.params.id);

    const updateToDo=await {
      title:req.body.title,
      description: req.body.description,
      status:req.body.status,
      priority:req.body.priority,
}

listtoDo[eachId]=updateToDo

    res.status(204).json(updateToDo);
  }catch(error){
    res.status(500).json({ message: "Error update" })
    next(error)
  }
});


router.delete('/:id', async(req, res,next) => {
  try{
    const eachId=await parseInt(req.params.id);
    await listtoDo.splice(eachId,1)
    res.sendStatus(204)
  }catch(error){
    res.status(500).json({ message: "Error Delete" })
    next(error)
  }
});


module.exports = router;