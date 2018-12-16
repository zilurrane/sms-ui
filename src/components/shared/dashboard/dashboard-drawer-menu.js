import React from 'react'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { DrawerMenuItems } from './dashboard-drawer-menu-items'

export default ({ classes, isDrawerMenuOpen, handleDrawerClose }) =>
  <Drawer
    variant='permanent'
    classes={{
      paper: classNames(classes.drawerPaper, !isDrawerMenuOpen && classes.drawerPaperClose)
    }}
    open={isDrawerMenuOpen}>
    <div className={classes.toolbarIcon}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <List>
      <DrawerMenuItems />
    </List>
    <Divider />
  </Drawer>
