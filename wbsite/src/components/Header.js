import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Icon, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Collapse from '@material-ui/core/Collapse';
import { Link as Scroll } from 'react-scroll';
const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar:
    {
        background: 'none',
        fontFamily: 'Nunito'
    },
    appbarTitle:
    {
        flexGrow: '1',
    },
    appbarWrapper:
     {
        width: '80%',
        margin: '0 auto',
    },

    icon:
    {
        color: '#000000',
        fontSize: '2rem',
    },
    colorText:{
        color: '#000000',
        fontSize: '1.5rem',
        
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
    },
    nextSection:{
        color: '#000000',
        fontSize: '2.5rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    },[])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarWrapper}>
                <IconButton>
                    <SortIcon className={classes.icon} />
                </IconButton>
                <h1 className={classes.appbarTitle}>
                    <span className={classes.colorText}>Kip Taylor</span> 
                </h1>
                </Toolbar>
            </AppBar>


            <Collapse in={checked}
             {...(checked ? { timeout: 1000 } : {})} 
                collapsedHeight={50}
>
            <div className={classes.container}>
                <h1 className={classes.title}>
                   <br/> Welcome To <br /> My Portfolio
                </h1>
                <Scroll to="place-to-visit" smooth={true}>
                <IconButton>
                  <ArrowDownwardIcon className={classes.nextSection}/>  
                </IconButton>
                </Scroll>
            </div>
            </Collapse>
        </div>
    );
}