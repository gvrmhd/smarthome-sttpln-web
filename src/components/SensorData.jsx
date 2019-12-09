import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import {
  ThermometerHalf,
  ThermometerFull,
  Sun,
  Moon,
  CloudSunRain,
  CloudSun
} from 'styled-icons/fa-solid';

import { Context } from '../utils/AppContext';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2, 2),
    backgroundColor: `rgba(255, 255, 255, 0.7)`
  },
  title: {
    flexGrow: 1
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1.5)
  },
  leftIcon: {
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 0.75)
  },
  titleStatus: {
    fontWeight: 600
  }
}));

const SensorData = () => {
  const classes = useStyles();
  const { sensor } = React.useContext(Context);

  const TempIcon =
    sensor.temp >= 30 ? (
      <ThermometerFull size='25' title='Moderate' className={classes.icon} />
    ) : (
      <ThermometerHalf size='25' title='Hot' className={classes.icon} />
    );

  const BrightIcon = sensor.bright ? (
    <Sun size='25' title='Light' className={classes.icon} />
  ) : (
    <Moon size='25' title='Dark' className={classes.icon} />
  );

  const WeatherIcon =
    sensor.rain ? (
      <CloudSunRain size='25' title='Rainy' className={classes.icon} />
    ) : (
      <CloudSun size='25' title='Cloudy' className={classes.icon} />
    );

  return (
    <Paper className={classes.paper}>
      <Box display='flex' alignItems='center'>
        {TempIcon}
        <Typography variant='h6' className={classes.title}>
          Temperature
        </Typography>
        <Typography variant='h6' className={classes.titleStatus}>
          {sensor.temp.toFixed(1)}°C
        </Typography>
      </Box>
      <Box display='flex' alignItems='center'>
        {BrightIcon}
        <Typography variant='h6' className={classes.title}>
          Lighting
        </Typography>
        <Typography variant='h6' className={classes.titleStatus}>
          {sensor.bright ? 'Bright' : 'Dark'}
        </Typography>
      </Box>
      <Box display='flex' alignItems='center'>
        {WeatherIcon}
        <Typography variant='h6' className={classes.title}>
          Weather
        </Typography>
        <Typography variant='h6' className={classes.titleStatus}>
          {sensor.rain ? 'Rainy' : 'Sunny/Cloudy'}
        </Typography>
      </Box>
    </Paper>
  );
};

export default SensorData;
