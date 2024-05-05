// src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "./actions/jobactions";
import JobCard from "./components/JobCard";
import JobFilter from "./components/JobFilter";

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs.jdList);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ limit: 947, offset: 0 }),
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch(setJobs(data));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const applyFilters = (filters) => {
    const filtered = jobs.filter((job) => {
      return (
        (filters.minExp === "" || job.minExp === filters.minExp) &&
        (filters.companyName === "" ||
          job.companyName === filters.companyName) &&
        (filters.location === "" || job.location === filters.location) &&
        (filters.remote === "" || job.remote === filters.remote) &&
        (filters.techStack === "" || job.techStack === filters.techStack) &&
        (filters.role === "" || job.role === filters.role) &&
        (filters.minBasePay === "" || job.minBasePay === filters.minBasePay)
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div className="app">
      <div className="job-list">
        <JobFilter jobs={jobs} applyFilters={applyFilters} />
        {jobs?.map((job) => (
          <JobCard key={job.jdUid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;
