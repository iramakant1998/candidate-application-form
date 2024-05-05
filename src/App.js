// src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "./actions/jobactions";
import JobCard from "./components/JobCard";
import JobFilter from "./components/JobFilter";

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs.jdList);
  const filters = useSelector((state) => state.filter.filters);
  console.log(filters)
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

    const filterJobs = () => {
      if (!filters || filters.minExp == null) {
        return jobs;
      }
      return jobs?.filter((job) => {
      if (
        filters.minExp &&
        !filters.companyName &&
        !filters.location &&
        !filters.remote &&
        !filters.techStack &&
        !filters.Role &&
        !filters.MinSalary
      ) {
        return job.minExp == filters.minExp;
      } else if (
        filters.minExp &&
        filters.companyName &&
        !filters.location &&
        !filters.remote &&
        !filters.techStack &&
        !filters.Role &&
        !filters.MinSalary
      ) {
        return (
          job.minExp == filters.minExp && job.companyName == filters.companyName
        );
        } else if (
          filters.minExp &&
          filters.companyName &&
          filters.location &&
          !filters.remote &&
          !filters.techStack &&
          !filters.Role &&
          !filters.MinSalary
        ) {
          return (
            job.minExp == filters.minExp &&
            job.companyName == filters.companyName && 
            job.location == filters.location
          );
          } else if (
            filters.minExp &&
            filters.companyName &&
            filters.location &&
            !filters.remote &&
            !filters.techStack &&
            filters.Role &&
            !filters.MinSalary
          ) {
            return (
              job.minExp == filters.minExp &&
              job.companyName == filters.companyName &&
              job.location == filters.location &&
              job.jobRole == filters.Role
            );
          }else if (
            filters.minExp &&
            filters.companyName &&
            filters.location &&
            !filters.remote &&
            !filters.techStack &&
            filters.Role &&
            filters.MinSalary
          ) {
            return (
              job.minExp == filters.minExp &&
              job.companyName == filters.companyName &&
              job.location == filters.location &&
              job.jobRole == filters.Role &&
              job.minJdSalary == filters.MinSalary
            );} 
          else {
            return [];
          }
      });
    };

    const filteredJobs = filterJobs();
    console.log(filteredJobs);

  return (
    <div className="app">
      <div className="job-list">
        <JobFilter jobs={jobs} />
        {filters
          ?
            filteredJobs?.map((job) => <JobCard key={job.jdUid} job={job} />)
          :
            jobs?.map((job) => <JobCard key={job.jdUid} job={job} />)}
      </div>
    </div>
  );
};

export default App;
