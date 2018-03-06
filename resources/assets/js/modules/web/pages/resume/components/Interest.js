import React from "react"
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import SwimIcon from 'material-ui-icons/Pool';
import PoolIcon from 'material-ui-icons/HdrStrong';
import PropTypes from "prop-types";
import {MenuList, MenuItem} from 'material-ui/Menu';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import PlayIcon from 'material-ui-icons/LocalPlay';
import Paper from 'material-ui/Paper';


const displayName = "Interest"
const styles = {
    bigAvatar: {
        width: 60,
        height: 60,
    },
    menuItem: {
        '& div': {
            padding: 0
        },
        '& svg': {
            marginRight: 10
        },
    },
    primary: {},
    icon: {},
};

function Interest(props) {
    const {classes} = props;

    return <Paper className="container mb-3">
        <div className="row pt-3 px-3 text-secondary ">
            <PlayIcon/> <Typography variant="title" color="inherit"
                                    className="pl-2"> Interest </Typography>
        </div>
        <div>
            <MenuList>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <SwimIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{primary: classes.primary}} inset
                                  primary="Swim"/>
                </MenuItem>
                <Divider/>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <PoolIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{primary: classes.primary}} inset primary="Pool"/>
                </MenuItem>
            </MenuList>
        </div>
    </Paper>
}

Interest.displayName = displayName

Interest.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Interest);
