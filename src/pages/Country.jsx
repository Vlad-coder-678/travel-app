import React from 'react';
import Container from '@material-ui/core/Container';
import { Box, makeStyles } from '@material-ui/core';
import { Player, BigPlayButton } from 'video-react';
import CountryPageInfo from '../components/CountryPageInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1300,
  },
  info: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  info_left: {
    flex: '1 1 70%',
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
  },
}));

function Country({
  url,
  country,
  capital,
  countryImg,
  population,
  religion,
  language,
  currency,
  lat,
  lng
}) {
  const classes = useStyles();
  console.log('lat',lat);
  console.log('lng',lng);
  return (
    <Box bgcolor="primary.light">
      <Container className={classes.root}>
        <div className={classes.info}>
          <div className={classes.info_left}>
            <CountryPageInfo
              country={country}
              capital={capital}
              countryImg={countryImg}
              population={population}
              religion={religion}
              language={language}
              currency={currency}
            />
            <div>slider</div>
          </div>
          <div className={classes.info_right}>
            <div>weather weatherweatherweather</div>
            <div>5 марта 2021</div>
            <div>1 Руфия (MVR)</div>
          </div>
        </div>
          <Player playsInline poster={`/assets/posters/${url}.jpg`}>
          <source src={`assets/videos/${url}.mp4`} />
          <BigPlayButton position="center" />
        </Player>
      </Container>
      <div>map</div>
    </Box>
  );
}

export default Country;
