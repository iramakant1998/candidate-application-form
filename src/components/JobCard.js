import React , {useState} from 'react';
import "../App.css"
import "../script.js"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const JobCard = ({ job }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <div className="job-card ">
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div className='card-header'>
        <div><img src={job.logoUrl}></img></div>
        <div className='header-items'>
        <Typography gutterBottom variant="h5" component="div">
        {job.companyName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {job.jobRole}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {job.location}
        </Typography>
        </div>
        </div>
        <Typography variant="body2" color="text.secondary">
      <span style={{ fontSize: "14px", fontWeight: "900" }}>About Company</span> <br />
      <span style={{ fontSize: "14px", fontWeight: "900" }}>About Us</span> <br />
      <div className='job-details' style={{ overflow: showFullDescription ? "visible" : "hidden" }}>
        {job.jobDetailsFromCompany}
        {!showFullDescription && <span className='view-more' onClick={toggleDescription}>View More</span>}
      </div>
    </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Minimum Experience <br></br>{`
         ${job.minExp ? job.minExp + " years" : "Entry Level"} `}
        </Typography>
      </CardContent>  
      <div className='btn-group'>
      <Button className='apply-btn' variant="contained">⚡ Easy Apply</Button>
      <Button variant="contained">👨‍👨‍👦‍👦 Unlock referral asks</Button>   
      </div> 
    </Card>
    </div>
  );
};

export default JobCard;
