import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ModeDialog from './ModeDialog';
import { Context } from '../utils/AppContext';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontFamily: `Titillium Web, sans-serif`
  },
  button: {
    color: theme.palette.common.white
  },
  outerAppbar: {
    // boxShadow: 'none',
    background: `rgb(40,48,72)`, // eslint-disable-next-line
    background: `linear-gradient(90deg, rgba(40,48,72,1) 0%, rgba(133,147,152,1) 100%)`
  },
  innerAppbar: {
    boxShadow: 'none',
    backgroundColor: `rgba(0,0,0,0)`
  }
}));

const NavBar = () => {
  const { loading } = React.useContext(Context);
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.outerAppbar}>
      <Container>
        <AppBar position='static' className={classes.innerAppbar}>
          <Toolbar disableGutters>
            <Typography variant='h5' className={classes.title}>
              SmartHome
            </Typography>
            {!loading && <ModeDialog />}
          </Toolbar>
        </AppBar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
