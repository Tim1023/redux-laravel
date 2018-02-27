// import libs
import React from 'react'

// import components

import {Link} from "react-router-dom";
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import MoreVert from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton';
import PropTypes from "prop-types";
import Menu, { MenuItem } from 'material-ui/Menu';

// define component name
const displayName = 'PublicHeader'

// validate properties
const propTypes = {
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object,
    handleMenu: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
}

// initiate component
const PublicHeader = ({ open, anchorEl, handleMenu, handleClose}) => (
    <div>
        <Hidden xsDown>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
        </Hidden>
        <Hidden smUp>
            <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                aria-label="More navigation"
                onClick={handleMenu}
                color="inherit"
            >
                <MoreVert/>
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
                <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/register">Register</MenuItem>
            </Menu>
        </Hidden>
    </div>)

// bind properties
PublicHeader.displayName = displayName
PublicHeader.propTypes = propTypes

// export component
export default PublicHeader
