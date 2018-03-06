import React from "react"
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

import {MenuItem} from 'material-ui/Menu';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


const displayName = "HomePageHeader"
const styles = {

};

function List(props) {
    const {children, classes} = props;

    return <div className="container ml-4 pb-2">
        <div className="row ">
            {children}
        </div>
    </div>
}

List.displayName = displayName

List.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default withStyles(styles)(List);
