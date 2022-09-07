import React, {useRef, useEffect} from 'react';
import { useGlobalContext } from '../context';
import listOfJobs from '../jobs.json';

const SearchForm = () => {

  const {searchterm, setSearchterm, setJobs, setLoading} = useGlobalContext();

  const searchref = useRef();


  const filterJobs = ()=>{
    const newJobs = listOfJobs.filter((job)=>{
      return job.title.toLowerCase().includes(searchterm.toLowerCase())
  });
   
    return  newJobs;
  };


  const handleSubmit = (e)=>{
    e.preventDefault();
    setSearchterm(searchref.current.value);
    setLoading(true);
    setJobs(filterJobs());
    setLoading(false);
    
  }

   useEffect(()=>{
      searchref.current.focus();
   },[]);

     return (
      <form className='form' onSubmit={handleSubmit} >
        <div className='form-control'>
            <input type='text'  ref={searchref}   placeholder='Search for jobs and press enter...'></input>
        </div>  
        <button type='submit'className='form-btn'>Search</button>
      </form>
  )
}

export default SearchForm
