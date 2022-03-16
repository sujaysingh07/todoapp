const express = require("express");
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

const taskModel = mongoose.model("taskManager", {
    Title: String,
  Description: String,
  date: {
      type:Date, 
      default: Date.now()
  },
  isCompleted: {
    type:Boolean, 
    default: false
},

});

// respond with "hello world" when a GET request is made to the homepage
app.post("/saveTask", (req, res) => {
  console.log(req.body);
  const Task = new taskModel(req.body);

  Task.save().then((data) =>{
    console.log("Sujay",data)
    res.send(data);
});
});

app.get("/", (req, res) => {
    taskModel.find().then((data)=>{
        res.send(data);
    })
});

app.delete("/removeTask", (req, res) => {
    console.log(req.query)
    taskModel.findOneAndDelete({_id:req.query._id}).then((data)=>{
        res.send(data);
    })
});

app.get("/updateTask",(req, res) => {
    console.log(req.query)
    taskModel.findOneAndUpdate({_id:req.query._id},{$set:{isCompleted:true}}).then((data)=>{
        res.send(data);
    })
});
app.listen(5000, () => {
  console.log("app started on 5000");
});
