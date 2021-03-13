import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0',
    },
    margin: '2rem 0.5rem 2rem 0',
    boxShadow: 'none',
  },
  title: {
    fontWeight: 600,
    fontSize: '1.1rem',
    margin: '1.8rem 0 1.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 1rem 0',
    },
  },
  bold: {
    fontWeight: 600,
  },
}));

function CountryPageInfo({
  country,
  capital,
  countryImg,
  population,
  religion,
  language,
  currency,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={`${country} image`}
        image={`assets/countryImg/${countryImg}`}
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          component="h2"
        >
         {country}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Столица — {capital}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Население — {population}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Религия — {religion}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Официальный язык — {language}
        </Typography>
        <Typography className={classes.bold} color="textPrimary" component="p">
          Валюта – {currency}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryPageInfo;
