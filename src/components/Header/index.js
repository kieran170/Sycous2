import React from "react";
import logo from "../../assets/logo.png";
import {Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '17px',
    border: '4px #80ba27 solid',
    borderRadius: '25px',
    width: '90%',
    padding: '5px',
    textAlign: 'center',
    transitionDuration: '0.5s',
    '&:hover': {
      cursor: 'pointer',
      borderColor: '#ded800'
    }
  },
  box2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '17px',
    border: '4px #1a82a6 solid',
    borderRadius: '25px',
    width: '90%',
    padding: '5px',
    textAlign: 'center',
    transitionDuration: '0.5s',
    '&:hover': {
      cursor: 'pointer',
      borderColor: '#ded800'
    }
  }
}));

export default function Footer() {

  const classes = useStyles();
  return (
    <Grid container md={12} style={{backgroundColor: '#364657'}}>
      <Grid md={2}>
      </Grid>
      <Grid md={3}>
      <img src={logo} alt='logo' />
      </Grid>
      <Grid md={2} style={{marginTop: '23px'}}>
      <Typography className={classes.box1}>Looking for Sycous? Click here!</Typography>
      </Grid>
      <Grid md={2} style={{marginTop: '23px'}}>
      <Typography className={classes.box2}>Accessibility Help?</Typography>
      </Grid>
  </Grid>
  );
}