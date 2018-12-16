import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import { Link } from 'react-router-dom'
import HomeComponent from '../../dashboard/home'
import StudentsComponent from '../../dashboard/students'
import TeachersComponent from '../../dashboard/teachers'

export const menuItemList = [
  {
    text: 'Dashboard',
    icon: DashboardIcon,
    link: '/dashboard',
    component: HomeComponent
  },
  {
    text: 'Students',
    icon: PeopleIcon,
    link: '/dashboard/students',
    component: StudentsComponent
  }, {
    text: 'Teachers',
    icon: BarChartIcon,
    link: '/dashboard/teachers',
    component: TeachersComponent
  }
]

export const DrawerMenuItems = () =>
  <Fragment>
    {
      menuItemList.map((item, key) =>
        <ListItem to={item.link} component={Link} key={key}>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>)
    }
  </Fragment>
