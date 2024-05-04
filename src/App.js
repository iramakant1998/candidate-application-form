// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from './actions/jobactions';
import JobCard from './components/JobCard';
import Filters from './components/Filters';

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs.jdList);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit: 10, offset: 0 }),
      });
      const data = await response.json();
      console.log(data)
      dispatch(setJobs(data));
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div className="app">
      <Filters />
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;
