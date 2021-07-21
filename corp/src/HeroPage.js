import React from 'react';
import Search from './components/Search';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
      height: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + './assets/terminix-tech-homepage-banner.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  },
}));

function HeroPage() {
 
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <CssBaseline />
          <Search/>
      </div>
  )
}

export default HeroPage;
