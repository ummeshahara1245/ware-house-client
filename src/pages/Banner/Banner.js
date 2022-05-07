import React from 'react';
import Grid from '@mui/material/Grid';
import imge from '../../images/New Project (4).png';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './Banner.css'
import { Link } from 'react-router-dom';
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <div style={{height:"500px"}} className='bgimage'>
            <div style={{paddingTop:'70px'}}>
            <Container className='shadow-lg' sx={{ flexGrow: 1,height:'400px',borderRadius:'20px',}}>
            <Grid className='mediqe' container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left',height:'524px' }} xs={12} md={6}>
                    <Box style={{marginTop:"-100px"}}>
                        <Typography variant='h4' style={{fontFamily:'Pacifico, cursive'}}>
                          ORGANIC
                            <br />
                           VEGETABLES
                            <br />
                        </Typography>
                        <h5 className='text-black'>
                           Small Changes Big Difference
                        </h5>
                        <Link className='no-underline' to='/explore'><button className='button-off rounded-full'>Explore our products<i className="fa-solid fa-magnifying-glass ico"></i></button></Link>
                    </Box>
                </Grid>
                <Grid className='imgGrid' item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <img className='ibu' src={imge} alt="" />
                </Grid>
            </Grid>
                

        </Container>
            </div>
        </div>
    );
};

export default Banner;