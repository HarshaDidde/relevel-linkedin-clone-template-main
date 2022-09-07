import React from 'react';
const Job = ({id, title, description}) => {
  return (
    
    <div className='single-job'>
        <h3> {title} </h3>
        <hr></hr>
        <p> {description}</p>
    </div>
    
    
  )
}

export default Job
