import React from 'react'
import "./task.css"
import Tasklist from './Tasklist';
const Task = (props) => {

  return (
    <div className='task'>
       <h3>Your Task</h3> <br />
       <Tasklist items ={props.items}/>
    </div>
  )
}

export default Task