import React from 'react';
import logo from './TwiadaStormLogo.png'; //image found at https://hdfreewallpaper.net/wp-content/uploads/2015/07/Bird-In-Rain-HD-Wallpaper.jpg
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme ( {
    palette: {
        primary: {
            main: '#00acc1',
        },
        secondary: {
            main: '#d9290a'
        },
    },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" style={theme}>
          <Toolbar variant="dense">
            <img src={logo} width="60" height="60" alt="logo" />
            <Typography variant="h1" color="inherit">
              Twiada Storm
            </Typography>
          </Toolbar>
        </AppBar>
      </ ThemeProvider>
    </div>
  );
}
