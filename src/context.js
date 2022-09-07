import React, {useState, useContext, useEffect} from 'react'
import listOfJobs from './jobs.json';


const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchterm, setSearchterm] = useState('so');

    useEffect(()=>{
      setLoading(true);
      setJobs(listOfJobs);
      setLoading(false);
    },[])
    
  return (
    <AppContext.Provider value={{jobs, loading, searchterm, setSearchterm, setJobs, setLoading}} >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext, AppProvider}
