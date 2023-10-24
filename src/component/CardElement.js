import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const CardElement = ({ jobTitle, description, category, location, id }) => {
    const { palette } = useTheme();
    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3, bgcolor: palette.primary.white }} style={{fontFamily: 'Montserrat, sans-serif'}}>

            <CardContent >
                <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} style={{fontFamily: 'Montserrat, sans-serif'}} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton> {location}
                </Typography>
                <Typography variant="h5" component="div" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {jobTitle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {category}
                </Typography>
                <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation variant='contained' size="small" startIcon={<AddIcon />}><Link style={{ textDecoration: "none", color: "white", boxShadow: 0, fontFamily: 'Montserrat, sans-serif' }} to={`/job/${id}`}>More Details</Link></Button>
            </CardActions>
        </Card>
    );
}

export default CardElement;