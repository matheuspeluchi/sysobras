import { makeStyles } from '@material-ui/core'
import React from 'react'
import Appbar from '../../layout/Appbar'
import MenuDrawer from '../../layout/Drawer'
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import Settings from '@material-ui/icons/Settings'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { connect } from 'react-redux';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  top: 64,
   content: {
    flexGrow: 1,
    paddingTop: '70px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: 0 ,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    marginLeft: drawerWidth
  },
}));

const Home = ({drawerState})=> {
  const classes = useStyles();
  const menu = [
    {
      title: "Orçamentos",
      icon: MonetizationOnIcon
    },
    {
      title: "Ordem de Serviço",
      icon: AssignmentIcon
    },
    {
      title: "Planilhas",
      icon: FormatListBulleted
    },
     {
      title: "Divider",
    },
    {
      title: "Configurações",
      icon: Settings
    },
  ]
  return (
    <div>
      <Appbar />
      <MenuDrawer menu={menu} />
     <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerState,
        })}
      >
        <Container maxWidth="xl" >
         <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </>
        < >
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </>

        </Container>
      </main>
    </div>
  )
}
const mapStateToProps = state => ({
  drawerState: state.GlobalState.drawer
})

export default connect(mapStateToProps)(Home);
