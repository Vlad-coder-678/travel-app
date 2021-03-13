import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Search from './Search';
import Language from './Language';

const useStyles = makeStyles((theme) => ({
  flex: {
    maxWidth: '95vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0',
  },
}));

function Header({ lang }) {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.dark">
      <Container className={classes.flex}>
       <Logo/>
       <Search/>
       <Language lang={lang}/>
      </Container>
    </Box>
  );
}

export default Header;
