import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.jobRole}</h3>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{job.jobDetailsFromCompany}</p>
      <p>{job.maxExp} years</p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
