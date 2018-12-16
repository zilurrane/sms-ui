import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'

const menuItemList = [
  {
    text: 'Dashboard',
    icon: DashboardIcon
  },
  {
    text: 'Students',
    icon: PeopleIcon
  }, {
    text: 'Reports',
    icon: BarChartIcon
  }
]

export const DrawerMenuItems = () =>
  <Fragment>
    {
      menuItemList.map((item, key) =>
        <ListItem button key={key}>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>)
    }
  </Fragment>
