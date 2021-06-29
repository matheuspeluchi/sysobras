import React from 'react';
import * as GlobalActions from '../../store/actions/utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import BreadCrumb from './BreadCrumb'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(0),
    marginLeft: 36
  },
  menuButtonClosed: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

}));

const MenuAppBar = ({ drawerState, toggle }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root} id="appbar">
      <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerState,
        })}>
        <Toolbar>
          <IconButton
            edge="start"
            className={!drawerState ? classes.menuButton: classes.menuButtonClosed}
            color="inherit"
            aria-label="menu"
            onClick={() => toggle(drawerState)} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <BreadCrumb />
          </Typography>
          <IconButton onClick={()=>alert("Você clicou no avatar")}>
            <Avatar alt="Remy Sharp" src="img/avatar.png" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  drawerState: state.GlobalState.drawer
});

const mapDispatchToProps = dispatch => bindActionCreators(GlobalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)
