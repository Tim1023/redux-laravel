import React from "react"
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, {CardContent} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import EmailIcon from 'material-ui-icons/Email';
import WebIcon from 'material-ui-icons/Web';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import PropTypes from "prop-types";
import {MenuList, MenuItem} from 'material-ui/Menu';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const displayName = "Profile"
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

function Profile(props) {
    const {classes} = props;

    return <Card className="mb-3">
        <CardContent className="bg-info">
            <div className="row container flex-nowrap">
                <Avatar aria-label="Recipe" className={classes.bigAvatar} src="/img/tim.jpeg">
                </Avatar>
                <Typography variant="display1" className="my-auto text-white">
                    &nbsp;Tim Zhao
                </Typography>
            </div>

        </CardContent>
        <CardContent className="pt-0">
            <div>
                <MenuList>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.primary}} inset
                                      primary="timzdeveloper23@gmail.com"/>
                    </MenuItem>
                    <Divider/>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <WebIcon/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.primary}} inset
                                      primary="deyangzhao.com"/>
                    </MenuItem>
                    <Divider/>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.primary}} inset
                                      primary="github.com/Tim1023"/>
                    </MenuItem>
                </MenuList>
            </div>
        </CardContent>
    </Card>
}

Profile.displayName = displayName

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
