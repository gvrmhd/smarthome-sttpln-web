import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Lightbulb as Regular } from 'styled-icons/fa-regular';
import { Lightbulb as Solid } from 'styled-icons/fa-solid';
import { Fan } from 'styled-icons/fa-solid';
import { Closet } from 'styled-icons/boxicons-regular';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import { Slider } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Context } from '../utils/AppContext';

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2, 2),
    backgroundColor: `rgba(255, 255, 255, 0.7)`
  },
  title: {
    display: 'flex',
    flexGrow: 1
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1)
  },
  button: {
    padding: theme.spacing(0),
    height: theme.spacing(3) + 5,
    width: theme.spacing(4) + 5
  },
  divider: {
    margin: theme.spacing(1, 0)
  },
  root: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(11)
  }
}));

const marks = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: '4'
  },
  {
    value: 5,
    label: '5'
  }
];

const valuetext = value => {
  return `${value}`;
};

const valueLabelFormat = value => {
  return marks.findIndex(mark => mark.value === value) + 1;
};

const CustomPaper = props => {
  const classes = useStyles();
  const handleClick = () => props.handler();
  const { manual } = React.useContext(Context);

  return (
    <Paper className={classes.paper}>
      <Box display='flex' alignItems='center'>
        {props.variant === 'fan' && (
          <Fan size='25' title='Light' className={classes.icon} />
        )}
        {props.variant === 'laundry' && (
          <Closet size='25' title='Light' className={classes.icon} />
        )}
        {props.variant === 'light' &&
          (props.state ? (
            <Solid size='25' title='Light' className={classes.icon} />
          ) : (
            <Regular size='25' title='Light' className={classes.icon} />
          ))}
        <Typography variant='h6' className={classes.title}>
          {props.title}
        </Typography>
        <Button
          disabled={!manual}
          className={classes.button}
          size='small'
          variant={props.state ? 'contained' : 'outlined'}
          color='primary'
          onClick={handleClick}
        >
          {manual ? (
            props.variant === 'laundry' ? (
              props.state ? (
                'DALAM'
              ) : (
                'LUAR'
              )
            ) : (
              <PowerSettingsNew />
            )
          ) : (
            'auto'
          )}
        </Button>
      </Box>
      {props.useLevel && (
        <div className={classes.root}>
          <Slider
            disabled={!props.state || !manual}
            value={props.level}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay='auto'
            marks={marks}
            min={1}
            max={5}
            onChange={(e, val) => props.levelHandler(val)}
          />
        </div>
      )}
    </Paper>
  );
};

CustomPaper.propTypes = {
  useLevel: PropTypes.bool,
  level: PropTypes.number,
  levelHandler: PropTypes.func,
  variant: PropTypes.string,
  title: PropTypes.string,
  handler: PropTypes.func,
  state: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

export default CustomPaper;
