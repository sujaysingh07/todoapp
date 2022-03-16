import { Box } from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Task from "./Task";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const axios = require('axios');

// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
const Home = () => {
  const [text, setText] = useState("");
  const [textfield, setTextfield] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [items, setItems] = useState(false);
  let push = () => {
    let entry ={
      Title : text, 
      Description : textfield,
      date : startDate
    }
    console.log(entry);
    axios.post('http://localhost:5000/saveTask', entry)
    .then(function (response) {
      console.log(response);
      setItems(!items)
    })
    .catch(function (error) {
      console.log(error);
    });
    
    localStorage.setItem('Entry',JSON.stringify(entry))
    setText('')
    setTextfield('')
    setStartDate(null)

  };

 

  

  return (
    <div className="app">
      <Box
        className="box"
        sx={{
          width: 900,
          height: 400,
          backgroundColor: "white",
        }}
      >
        <h2 style={{ textAlign: "center", padding: "20px", color: "#003979" }}>
          Task Manager
        </h2>
        <div className="input">
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Task title"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
          <br />
          <br />
          <TextField
            id="outlined-textarea"
            label="Task Description"
            // placeholder="Placeholder"
            multiline
            className="textfield"
            value={textfield}
            onChange={(e) => setTextfield(e.target.value)}
          />{" "}
          <br />
          <br />
          <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        isClearable
        // minDate={new Date()}
      // maxDate={addMonths(new Date(), 5)}
        showYearDropdown
      />
      
          <br />
          <br />
          <Button  variant="contained" onClick={push}>
            Add
          </Button>
        </div>
        <Task items = {items} />
        {/* <Date/> */}
      </Box>
      
    </div>
  );
};

export default Home;
