import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import "./tasklist.css";
const axios = require("axios");

const Tasklist = (props) => {
  const [alltask, setAlltask] = useState([]);
  let getallTask = () => {
    axios
      .get("http://localhost:5000/")
      .then(function (response) {
        console.log(response);
        setAlltask(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  let completeTask = (_id) => {
    axios
      .get("http://localhost:5000/updateTask", { params: { _id } })
      .then(function (response) {
        console.log(response);
        getallTask();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  let deleteTask = (_id) => {
    axios
      .delete("http://localhost:5000/removeTask", { params: { _id } })
      .then(function (response) {
        console.log(response);
        getallTask();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getallTask();
  }, [props.items]);
  return (
    <>
      {alltask.length
        ? alltask.map((elem, index) => {
            return (
              <>
                <div className="card1">
                  <div className="text">
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      className="p"
                    >
                      {index + 1} {elem.Description}
                    </Typography>
                  </div>
                  <div className="buttongroup">
                    <Button
                      disabled={elem.isCompleted?true:false}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        completeTask(elem._id);
                      }}
                    >
                      Completed
                    </Button>

                    <Button
                      id="button"
                      variant="contained"
                      color="error"
                      onClick={() => {
                        deleteTask(elem._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </>
            );
          })
        : null}
    </>
  );
};

export default Tasklist;
