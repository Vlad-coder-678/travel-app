import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 350,
    [theme.breakpoints.down('xs')]: {
      width: 280,
    },
    margin: '2rem 0.5rem',
    [theme.breakpoints.between('lg', 'sm')]: {
      margin: '2rem 1rem',
    },
    boxShadow: '4px 5px 15px 3px rgba(25,105,67,0.81)',
    '&:hover': {
      boxShadow: '3px 4px 13px -2px rgba(25,105,67,0.81)',
    },
  },
  bold: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
}));

function ImageCard({country, capital, countryImg}) {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${country} image`}
            height="140"
            image={`assets/countryImg/${countryImg}`}
          />
          <CardContent>
            <Typography
              className={classes.bold}
              color="textPrimary"
              component="h2"
            >
              {country}
            </Typography>
            <Typography color="textPrimary" component="p">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

export default ImageCard;
