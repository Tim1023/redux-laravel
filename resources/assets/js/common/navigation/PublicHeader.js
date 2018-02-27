// import libs
import React from 'react'

// import components

import {Link} from "react-router-dom";
import Button from 'material-ui/Button';

// define component name
const displayName = 'PublicHeader'

// validate properties
// const propTypes = {
//   showNavigation: PropTypes.bool.isRequired,
// }

// initiate component
const PublicHeader = () => (
    <div>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
    </div>)

// bind properties
PublicHeader.displayName = displayName
// PublicHeader.propTypes = propTypes

// export component
export default PublicHeader
