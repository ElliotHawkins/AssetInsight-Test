import React, { useEffect, useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


import home from './HouseList.json';

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
  table: {
    minWidth: 850,
  },
  homeImage: {
    paddingLeft: 400,
    width: 300,
    height: 200,
  },
  padding: {
    fontSize: 15,
    paddingLeft: 150,
  },
}));


export default function SearchAppBar() {

  const [input, setInput] = React.useState();
  const classes = useStyles();
  
  const handleChange = (event) => {
    setInput(event.target.value)
    console.log(input)
  }

  const filter = home.filter(search => {
    return search.city.indexOf(input) !== -1;
  }); 


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
        <TableBody>
          {filter.map((Detail, index) => {
            return ( 
              <TableRow>
                <TableCell className={classes.padding}>{Detail.address}</TableCell>
                <TableCell className={classes.padding}>{Detail.price}</TableCell>
                <TableCell >
                  <img
                  src={Detail.picture}
                  alt=""
                  className = {classes.homeImage}
                  />
                  </TableCell>
              </TableRow>
            )
        })}
        </TableBody>
      </div>
            
    </div>
  );
}
