import React from 'react';
import './App.css';


import Jobs from './Jobs';


const job_api = 'http://localhost:3001/jobs';

// const mockJobs = [{
// title:"SWE 1",
// company:" Google"

// },
// {
//   title:"SWE 1",
//   company:" Facebook"
  
//   },
//   {
//     title:"SWE 1",
//     company:" Apple"
    
//     }]
    async function fetchJobs(updateCb){
     const res = await  fetch(job_api);
     const json = await res.json();
     updateCb(json);
     console.log({json});
     
   }

function App() {
  const [jobList, updateJobs] = React.useState([]);
  React.useEffect(()=>{
 fetchJobs(updateJobs);
  }, []);
  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
