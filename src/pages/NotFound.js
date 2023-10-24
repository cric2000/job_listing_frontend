import { Box } from '@mui/material'
import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ height: '86vh', display: "flex", alignItems: "center", justifyContent: "center" }} style={{fontFamily: 'Montserrat, sans-serif'}}>

                <h1>Page not found!</h1>
            </Box>
            <Footer />
        </>
    )
}

export default NotFound