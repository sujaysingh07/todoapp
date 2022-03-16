import React from 'react'
import "./task.css"
import Tasklist from './Tasklist';
const Task = () => {

  return (
    <div className='task'>
       <h3>Your Task</h3> <br />
       <Tasklist/>
    </div>
  )
}

export default Task