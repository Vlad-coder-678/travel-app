import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import logoImg from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 120,
  },
  bold: {
    fontWeight: 600,
    lineHeight: 'normal',
    padding: '0 0.5rem'
  },
}));

const style = {
  link: {
    textDecoration: 'none',
  },
  logo: {
    maxWidth: 45,
  },
};

function Logo() {
  const classes = useStyles();
  return (
        <NavLink exact to="/" style={style.link}>
          <div className={classes.logo}>
            <img src={logoImg} alt="logo" style={style.logo} />
            <div>
              <Typography
                className={classes.bold}
                color="textPrimary"
                component="h2"
              >
                React
              </Typography>
              <Typography
                className={classes.bold}
                color="textPrimary"
                component="h2"
              >
                Travel
              </Typography>
            </div>
          </div>
        </NavLink>
  );
}

export default Logo;