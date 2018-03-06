import React from "react"
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from "prop-types";
import {MenuList, MenuItem} from 'material-ui/Menu';
import {ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import LanguageIcon from 'material-ui-icons/Language';
import Paper from 'material-ui/Paper';


const displayName = "Language"
const styles = {
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

function Language(props) {
    const {classes} = props;

    return <Paper className="container mb-3">
        <div className="row pt-3 px-3 text-secondary ">
            <LanguageIcon/> <Typography variant="title" color="inherit"
                                    className="pl-2"> Languages </Typography>
        </div>
        <div>
            <MenuList>
                <MenuItem className={classes.menuItem}>

                    <ListItemText classes={{primary: classes.primary}}
                                  primary="English"
                                  secondary="Good skills, both written and oral."
                    />
                </MenuItem>
                <Divider/>
                <MenuItem className={classes.menuItem}>

                    <ListItemText classes={{primary: classes.primary}}
                                  primary="Mandarin"
                                  secondary="Native Language"/>
                </MenuItem>
            </MenuList>
        </div>
    </Paper>
}

Language.displayName = displayName

Language.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Language);
