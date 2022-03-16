import { Button,Typography } from '@material-ui/core'
import React from 'react'
import "./tasklist.css"

const Tasklist = () => {
  return (
    <div className='card1'>
        <div className="text">
        <Typography variant="subtitle1" component="h6">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, molestiae.
</Typography>
        </div>
        <div className="buttongroup">
        <Button variant="contained" color='primary'>Completed</Button>

        <Button id='button' variant="contained" color="error" >Delete</Button>
        </div>
        
    </div>
  )
}

export default Tasklist