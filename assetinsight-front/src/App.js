import React, { useEffect, useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

import people from './PeopleList.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
    },
  },
  italic: {
    fontStyle: 'italic',
    color: 'grey',
    paddingLeft: '20px'
  },
  searchValue:{
    fontSize: 25,
    paddingLeft: '25px'
  },
  boxStyle: {
    padding: '50px',
    backgroundColor:'#add8e6'
  },
  right: {
    textAlign: "right"
  }
}));


export default function SearchAppBar() {

  const [input, setInput] = React.useState();
  const classes = useStyles();
  
  const handleChange = (event) => {
    setInput(event.target.value)
    console.log(input)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Asset Insight Tester
          </Typography>
          
          <form className={classes.search} onChange={handleChange}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }} 
              inputProps={{ 'aria-label': 'search' }} 
            />
          </form>
        </Toolbar>
      </AppBar>
      
      <div>
        <h1 className={classes.searchValue}>Searching For: <text className={classes.italic}>{input}</text></h1> 
      </div>
      <div>
        {people.map((personDetail, index) => {
          return (
            <Box className = {classes.boxStyle}> 
              <text>{personDetail.address}</text>
              <text className = {classes.right}>{personDetail.name}</text>
            </Box>
          )
        })}
      </div>
            
    </div>
  );
}
