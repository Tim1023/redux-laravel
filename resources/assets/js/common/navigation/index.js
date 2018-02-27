// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../modules/auth/service'
import compose from 'recompose/compose';

// import components

import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';



const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    padding: {
        padding: 0,
    }
};

class Navigation extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
        anchorEl: null,
    }

    this.logout = this.logout.bind(this);
  }
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    logout() {
        this.props.dispatch(logout())
        this.handleClose()
    }

    render() {
        const { classes,isAuthenticated,user } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>

                <AppBar position="fixed" className={classes.padding}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        {
                            isAuthenticated
                            ?<PrivateHeader user={user} open={open} anchorEl={anchorEl} logout={this.logout}  handleClose={this.handleClose} handleMenu={this.handleMenu} />
                            :<PublicHeader/>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Navigation);