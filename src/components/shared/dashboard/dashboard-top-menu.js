import React from 'react'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'

export default ({ classes, isDrawerMenuOpen, handleDrawerOpen }) =>
  <AppBar
    position='absolute'
    className={classNames(classes.appBar, isDrawerMenuOpen && classes.appBarShift)}>
    <Toolbar disableGutters={!isDrawerMenuOpen} className={classes.toolbar}>
      <IconButton
        color='inherit'
        aria-label='Open drawer'
        onClick={handleDrawerOpen}
        className={classNames(
          classes.menuButton,
          isDrawerMenuOpen && classes.menuButtonHidden
        )}>
        <MenuIcon />
      </IconButton>
      <Typography
        component='h1'
        variant='h6'
        color='inherit'
        noWrap
        className={classes.title}>
            Dashboard
      </Typography>
      <IconButton color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
