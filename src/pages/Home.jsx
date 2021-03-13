import React from 'react';
import Container from '@material-ui/core/Container';
import ImageCard from '../components/ImageCard';
import { Box, makeStyles } from '@material-ui/core';
import backgroundImg from '../assets/images/main.jpg';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: 300,
  },
  cards: {
    maxWidth: '100vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    margin: '-140px auto 0 auto',
  },
}));

const style = {
  link: {
    textDecoration: 'none',
  },
};

function Home({ allCountriesInfo }) {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.main">
      <Box className={classes.background}></Box>
     {allCountriesInfo.length>0 && <Container className={classes.cards}>
        {allCountriesInfo &&
          allCountriesInfo.map((item) => (
            <NavLink
              key={item.url}
              exact
              to={`/${item.url}`}
              style={style.link}
            >
              <ImageCard
                country={item.country}
                capital={item.capital}
                countryImg={item.countryImg}
              />
            </NavLink>
          ))}
      </Container>}
    </Box>
  );
}

export default Home;
