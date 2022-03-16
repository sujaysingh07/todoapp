import { Box } from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Task from "./Task";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
const Home = () => {
  const [text, setText] = useState("");
  const [textfield, setTextfield] = useState("");
  const [startDate, setStartDate] = useState(null);

  // const [items, setItems] = useState([]);
  let push = () => {
    let entry ={
      Title : text, 
      Desciption : textfield,
      date : startDate
    }
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
          <Button variant="contained" onClick={push}>
            Add
          </Button>
        </div>
        <Task />
      </Box>
    </div>
  );
};

export default Home;
