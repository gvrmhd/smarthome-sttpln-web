import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Context } from '../utils/AppContext';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  button: {
    color: theme.palette.common.white
  },
  innerAppbar: {
    boxShadow: 'none'
  }
}));

const ModeDialog = () => {
  const classes = useStyles();
  const { manual, update } = React.useContext(Context);

  const [mDialog, setMD] = React.useState(false);
  const [aDialog, setAD] = React.useState(false);

  const handleClickOpen = () => {
    if (manual) {
      setMD(true);
    } else {
      setAD(true);
    }
  };

  const handleClose = () => {
    setMD(false);
    setAD(false);
  };

  const handleButton = () => {
    handleClose();
    update('manual', !manual);
  };

  return (
    <>
      <Button className={classes.button} onClick={handleClickOpen}>
        {manual ? 'manual' : 'auto'}
      </Button>

      <Dialog open={mDialog} onClose={handleClose}>
        <DialogTitle>Mode SmartHome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dalam konfigurasi Automatic, semua alat akan menyesuaikan diri
            dengan kondisi ruangan dan tidak dapat diatur melalui aplikasi. Apa
            anda yakin ingin menggunakan konfigurasi Automatic ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Tidak
          </Button>
          <Button
            onClick={handleButton}
            variant='contained'
            color='primary'
            autoFocus
          >
            Iya
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={aDialog} onClose={handleClose}>
        <DialogTitle>Mode SmartHome</DialogTitle>
        <DialogContent>
          <DialogContentText>Kembali ke konfigurasi Manual ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Tidak
          </Button>
          <Button
            onClick={handleButton}
            variant='contained'
            color='primary'
            autoFocus
          >
            Iya
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModeDialog;
