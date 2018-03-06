// import libs
import React from 'react'

// import components

import {Link} from "react-router-dom";

import PropTypes from "prop-types";
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import BookIcon from 'material-ui-icons/Book';
import CloseIcon from 'material-ui-icons/Close'
import BlogIcon from 'material-ui-icons/LightbulbOutline'
import ResumeIcon from 'material-ui-icons/VerifiedUser'

// define component name
const displayName = 'SideMenu'

// validate properties
const propTypes = {
    drawerToggle: PropTypes.bool.isRequired,
    handleDrawer: PropTypes.func.isRequired,
}

const menuStyle = {
    width: 250
}
// initiate component
const SideMenu = ({ drawerToggle,handleDrawer}) => (
    <Drawer open={drawerToggle} onClose={()=>handleDrawer(false)}>
        <div
            tabIndex={0}
            role="button"

        >
            <div style={menuStyle}>
                <List component="nav">
                    <ListItem button onClick={()=>handleDrawer(false)}>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                    </ListItem>
                    <Divider/>

                    <ListItem button component={Link} to="/articles">
                        <ListItemIcon>
                            <BookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Articles" />
                    </ListItem>
                    <ListItem button component={Link} to="/blog">
                        <ListItemIcon>
                            <BlogIcon />
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItem>
                    <ListItem button component={Link} to="/resume">
                        <ListItemIcon>
                            <ResumeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Resume" />
                    </ListItem>

                </List>
            </div>
        </div>
    </Drawer>)

// bind properties
SideMenu.displayName = displayName
SideMenu.propTypes = propTypes

// export component
export default SideMenu
