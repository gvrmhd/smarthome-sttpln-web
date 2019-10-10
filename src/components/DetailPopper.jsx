import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  },
  iconButton: {
    color: theme.palette.common.white
  },
  paper: {
    width: theme.spacing(45)
  }
}));

const DetailPopper = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <MoreHoriz className={classes.iconButton} />
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement='bottom-end'
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={classes.paper}>
                <Typography className={classes.typography}>
                  The content of the Popper.
                </Typography>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

export default DetailPopper;
