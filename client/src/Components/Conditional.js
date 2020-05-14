import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import SentimentGrid from './SentimentGrid';

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
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



export default function FullScreenDialog(props) {
  const data = props.data;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen} size="small">
        Expanded Sentiment Information
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sentiment Details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Nice!
            </Button>
          </Toolbar>
        </AppBar>
        <SentimentGrid data={data}/>
      </Dialog>
      </ThemeProvider>
    </div>
  );
}
