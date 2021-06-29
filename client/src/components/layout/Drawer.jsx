import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../../img/logo.png'

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'start',
  },
  drawerTitle: {
    marginLeft: theme.spacing(3),
    fontSize: '1rem',
    fontFamily: "Roboto",
    fontWeight: 400
  }

}));

const MenuDrawer = (props ) => {
  const classes = useStyles();
  const { drawerState, menu } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        open={drawerState}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerState,
          [classes.drawerClose]: !drawerState,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerState,
            [classes.drawerClose]: !drawerState,
          }),
        }}
      >
        <div className={classes.drawerHeader}>
          <img src={Logo} width="40px" height="40px" alt="Logo"/>
          {drawerState ?<span className={classes.drawerTitle}>EngeSoft</span> : ''}
        </div>
        <Divider />
        <List>
          {menu.map((item, index) => (
            item.title !== "Divider" ?
              <ListItem button key={index}>              
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
              : 
              <Divider key={index}/>
            
          ))}
          
        </List>
      </Drawer>

    </div>
  );
}

const mapStateToProps = state => ({
  drawerState: state.GlobalState.drawer
});

export default connect(mapStateToProps)(MenuDrawer)
