import React from "react";
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import {Grid, Typography} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function Footer() {

  return (
    <Grid container md={12} style={{backgroundColor: '#e3e1e2'}}>
      <Grid md={2}></Grid>
      <Grid md={4}>
        <Grid style={{paddingLeft: '12%', paddingBottom: '20px'}} container md={12}>
          <Typography style={{fontSize: '50px'}} md={12}>Follow Us!</Typography>
        </Grid>
        <Grid container md={12}>
          <Grid item md={2}><img src={twitter} alt='twitter'/></Grid>
          <Grid item md={2}><img src={facebook} alt='facebook'/></Grid>
          <Grid item md={2}><img src={instagram} alt='instagram'/></Grid>
          <Grid item md={2}><img src={youtube} alt='youtube'/></Grid>
        </Grid>
      </Grid>
      <Grid md={4}>
        <Grid style={{paddingLeft: '12%', paddingBottom: '20px'}} container md={12}>
          <Typography style={{fontSize: '50px'}} md={12}>Sycous Customer</Typography>
        </Grid>
        <Grid container md={12}>
          <Grid md={4} style={{paddingLeft: '26%', paddingTop: '10px'}}>
            <Typography>Click here for Sycous.com </Typography>
          </Grid>
          <Grid md={1} style={{paddingTop: '10px'}}>
            <ArrowForwardIosIcon/>
          </Grid>
        </Grid></Grid>
      <Grid md={2}></Grid>
    </Grid>
  );
}