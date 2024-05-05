import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../App.css";

const JobFilter = ({ jobs, applyFilters }) => {
  const commonTechStacks = [
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Python",
    "Java",
    "C#",
    "Ruby",
    "PHP",
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Swift",
    "Kotlin",
    "Flutter",
    "Django",
    "Spring",
    "ASP.NET",
  ];

  const uniqueMinExpValues = [
    ...new Set(jobs?.map((job) => job.minExp || "Entry Level")),
  ];
  const uniqueCompanyNames = [...new Set(jobs?.map((job) => job.companyName))];
  const uniqueLocations = [...new Set(jobs?.map((job) => job.location))];
  const uniqueRemoteOptions = ["Remote", "On-site"];
  const uniqueTechStacks = commonTechStacks;
  const uniqueRoles = [...new Set(jobs?.map((job) => job.jobRole))];
  const uniqueMinBasePays = [
    ...new Set(
      jobs?.map((job) => job.minJdSalary).filter((salary) => salary != null)
    ),
  ];

  const [filters, setFilters] = useState({
    uniqueMinExpValues: "",
    uniqueCompanyNames: "",
    uniqueLocations: "",
    uniqueRemoteOptions: "",
    uniqueTechStacks: "",
    uniqueRoles: "",
    uniqueMinBasePays: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Handle filter submission
    applyFilters(filters);
  };

  return (
    <form onSubmit={handleFilterSubmit} className="form-container">
      <div className="select-container">
        <select
          name="minExp"
          value={filters.minExp}
          onChange={handleInputChange}
        >
          <option value="">Minimum Experience</option>
          {uniqueMinExpValues?.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <select
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
        >
          <option value="">Company Name</option>
          {uniqueCompanyNames?.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <select
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
        >
          <option value="">Location</option>
          {uniqueLocations?.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <select
          name="remote"
          value={filters.remote}
          onChange={handleInputChange}
        >
          <option value="">Remote/on-site</option>
          {uniqueRemoteOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
        >
          <option value="">Tech stack</option>
          {uniqueTechStacks?.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <select
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
        >
          <option value="">Role</option>
          {uniqueRoles?.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <select
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
        >
          <option value="">Minimum Base Pay</option>
          {uniqueMinBasePays?.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <div className="apply-btn">
          <Button variant="contained">Apply Filter</Button>
        </div>
      </div>
    </form>
  );
};

export default JobFilter;
