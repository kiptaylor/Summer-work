import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import ProdjectCard from './ProdjectsCard';

const useStyles = makeStyles((theme) => ({

    root: {
        height: '100vh',
    },
}));

export default function() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <ProdjectCard />
        </div>
    )
}