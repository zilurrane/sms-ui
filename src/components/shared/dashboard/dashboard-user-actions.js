import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import { Link } from 'react-router-dom'

class DashboardUserActions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null
    }
  }

  handleClick (event) {
    this.setState({ anchorEl: event.currentTarget })
  };

  handleClose () {
    this.setState({ anchorEl: null })
  };

  render () {
    const { anchorEl } = this.state

    return (
      <div>
        <IconButton color='inherit'
          aria-owns={anchorEl ? 'user-actions-menu' : undefined}
          aria-haspopup='true'
          onClick={(e) => this.handleClick(e)} >
          <PersonIcon />
        </IconButton>
        <Menu
          id='user-actions-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.handleClose()} >
          <MenuItem component={Link} to='/profile' >My Profile</MenuItem>
          <MenuItem component={Link} to='/login' >Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default DashboardUserActions
