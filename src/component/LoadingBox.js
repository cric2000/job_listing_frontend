import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, IconButton, Skeleton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';

const LoadingBox = () => {
    const { palette } = useTheme();

    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3, bgcolor: palette.primary.white }}>
            <CardContent>
                <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton>
                    <Skeleton width={100} animation="wave" />
                </Typography>
                <Typography variant="h5" component="div">
                    <Skeleton width={200} animation="wave" />
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    <Skeleton width={100} animation="wave" />
                </Typography>
                <Typography variant="body2">
                    <Skeleton height={20} width="90%" animation="wave" />
                </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation variant='contained' size="small" startIcon={<AddIcon />}>
                    <Skeleton width={100} animation="wave" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default LoadingBox