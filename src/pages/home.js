import React from 'react'
import SearchForm from '../components/searchForm';
import Jobs from '../components/jobs';
const home = () => {
  return (
    <main className='home'>
      <SearchForm/>
      <Jobs/>
    </main>
  )
}

export default home
