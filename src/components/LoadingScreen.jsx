import React from 'react';
import { Dialog, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  colorPrimary: {
    color: theme.palette.common.white
  }
}));

const LoadingDialog = props => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgress classes={{ colorPrimary: classes.colorPrimary }} />
      <br />
      <Typography variant='h6' className={classes.colorPrimary}>
        Loading
      </Typography>
    </div>
  );
};

export default props => {
  return (
    <Dialog
      open={props.loading}
      aria-labelledby='form-dialog-title'
      PaperComponent={LoadingDialog}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <LoadingDialog />
    </Dialog>
  );
};
