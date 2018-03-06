import React from "react"
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

import {MenuItem} from 'material-ui/Menu';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


const displayName = "Github"
const styles = {
    menuItem: {
        "& svg": {
            width: '40px !important',
            height: '40px !important',
            margin: '0 !important'
        }
    }
    
};

function Github(props) {
    const {classes, primary, secondary, link} = props;

    return <div className="col-md-6 mt-1 mb-1 ">
        <a href={link}>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <FontAwesomeIcon icon={faGithub}/>
                </ListItemIcon>
                <ListItemText  inset primary={primary} secondary={secondary}/>
            </MenuItem>
        </a>
    </div>
}

Github.displayName = displayName

Github.propTypes = {
    classes: PropTypes.object.isRequired,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,


};

export default withStyles(styles)(Github);
