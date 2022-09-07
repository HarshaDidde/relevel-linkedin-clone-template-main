import React,{useState, useRef,useCallback} from 'react';
import Job from './job';
import { useGlobalContext } from '../context';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';

const Jobs = () => {
  const {jobs, loading} = useGlobalContext();
  const [startIdx, setStartIdx] = useState(0);
  const JobsPerPage = 9;

  const leftButtonRef = useRef();
  const rightButtonRef = useRef();

  const buttonList = useCallback(() =>{
    const btnlist = [];
    const numberOfButtons = Math.ceil(jobs.length/ JobsPerPage );
    for(let i=1; i<= numberOfButtons; i++){
      btnlist.push(i);
    }

    return btnlist;
  },[jobs])


  const incrementIdx = useCallback(() =>{
    if (startIdx + 9 < jobs.length){
      setStartIdx(startIdx + JobsPerPage);

    }
    
  }, [jobs, startIdx])

  const decrementIdx = useCallback(() =>{
    if (startIdx  >= JobsPerPage){
      setStartIdx(startIdx - JobsPerPage);
    }
    
  }, [jobs, startIdx])

  

  if (loading){
    return <h1> Loading ...</h1>
  }

  if (jobs.length > 0){

    return (
    
      <section className='job-list-container'>
        
  
      <div className='job-list'>
        {jobs.map((job,idx)=>{
         return (idx >= startIdx && idx < startIdx + JobsPerPage)? <Job key={job.id} {...job} > </Job> : null;
      })  }
      </div>
  
        
      
      <div className='btn-list'>
        <button className='btn'  ref={leftButtonRef} onClick={decrementIdx}  > <AiOutlineLeft/> </button>
          {buttonList() && buttonList().map((item, idx)=>{
            if (startIdx === (item-1)*JobsPerPage){
              return <button  key={idx} className='btn active-btn' onClick={()=> setStartIdx( (item-1)*9)} > {item} </button>
            }
              
             return <button   key={idx} className='btn' onClick={()=> setStartIdx( (item-1)*9)} > {item} </button>
              
          })}
         
        <button className='btn' ref={rightButtonRef} onClick= {incrementIdx}> <AiOutlineRight/></button>
      </div>
      </section> 
      
      
      
    )
  }
  
  return <h2  style={{marginTop: "2rem"}}> No jobs available in search category .. </h2>
  
}

export default Jobs
