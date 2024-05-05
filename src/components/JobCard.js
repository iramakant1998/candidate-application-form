import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const JobCard = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowFullDescription(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="job-card" ref={cardRef}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <div className="card-header">
            <div className="image-div">
              <img src={job.logoUrl} alt="Company Logo" />
            </div>
            <div className="header-items">
              <Typography component="div">{job.companyName}</Typography>
              <Typography component="div">
                {job.jobRole
                  ? job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)
                  : ""}
              </Typography>
              <Typography component="div">
                {job.location
                  ? job.location.charAt(0).toUpperCase() + job.location.slice(1)
                  : ""}
              </Typography>
            </div>
          </div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontSize: "12px", fontWeight: "600" }}>
              Estimated Salary :{" "}
              {job.minJdSalary
                ? `₹ ${job.minJdSalary} - ${job.maxJdSalary} `
                : `Up to ₹ ${job.maxJdSalary}`}{" "}
              LPA ✅
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontSize: "14px", fontWeight: "900" }}>
              About Company
            </span>{" "}
            <br />
            <span style={{ fontSize: "14px", fontWeight: "900" }}>
              About Us
            </span>{" "}
            <br />
            <div
              className="job-details"
              style={{ maxHeight: showFullDescription ? "none" : "100px" }}
            >
              {job.jobDetailsFromCompany}
            </div>
            {!showFullDescription && (
              <span className="view-more" onClick={toggleDescription}>
                View More
              </span>
            )}
          </Typography>
          <Typography style={{ fontSize: "14px", fontWeight: "900" }}>
            <span>Minimum Experience</span> <br />
            {`
             ${job.minExp ? job.minExp + " years" : "Entry Level"} `}
          </Typography>
        </CardContent>
        <div className="btn-group">
          <Button className="apply-btn" variant="contained">
            ⚡ Easy Apply
          </Button>
          <Button variant="contained">👨‍👨‍👦‍👦 Unlock referral asks</Button>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
