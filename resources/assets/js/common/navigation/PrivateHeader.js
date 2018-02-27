// import libs
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import components

import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';

// define component name
const displayName = 'PrivateHeader'

// validate properties
const propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  handleMenu: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

// initiate comppnent
const PrivateHeader = ({ user,  open, anchorEl, logout, handleMenu, handleClose}) => (

    <div>
        <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose} component={Link} to={`/users/${user.id}/edit`}>Profile</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    </div>)

// bind properties
PrivateHeader.displayName = displayName
PrivateHeader.propTypes = propTypes

// export component
export default PrivateHeader
