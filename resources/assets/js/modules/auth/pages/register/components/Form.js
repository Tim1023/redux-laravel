import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import blue from "material-ui/colors/blue";
import Typography from 'material-ui/Typography';

const displayName = 'RegisterFrom'

const propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}
const styles = {
    bgColor: {
        backgroundColor: blue["500"],
    },
    bot:{
        padding: 10,
        width:300
    }
}
const Form = ({name, email, password, passwordConfirmation, errors, handleChange, handleSubmit}) => {
    return (<form className="form" role="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="headline">Sign up</Typography>
        <div className="form-group">
            <TextField
                label="Full Name"
                type="text"
                className={`form-control form-control-lg rounded-0 ${errors.has('name') && 'is-invalid'}`}
                name="name"
                id="name"
                placeholder="Full Name"
                value={name || ''}
                onChange={e => handleChange(e.target.name, e.target.value)}
                required
                autoFocus/>
            {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
        </div>
        <div className="form-group">
            <TextField
                label="Email"
                type="email"
                className={`form-control form-control-lg rounded-0 ${errors.has('email') && 'is-invalid'}`}
                name="email"
                id="email"
                placeholder="Email address"
                value={email || ''}
                onChange={e => handleChange(e.target.name, e.target.value)}
                required
            />
            {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
        </div>
        <div className="form-group">
            <TextField
                label="password"
                type="password"
                className={`form-control form-control-lg rounded-0 ${errors.has('password') && 'is-invalid'}`}
                id="password"
                name="password"
                placeholder="Password"
                value={password || ''}
                onChange={e => handleChange(e.target.name, e.target.value)}
                required/>
            {errors.has('password') && <div className="invalid-feedback">{errors.first('password')}</div>}
        </div>
        <div className="form-group">
            <TextField
                label="Confirm Password"
                type="password"
                className={`form-control form-control-lg rounded-0 ${errors.has('passwordConfirmation') && 'is-invalid'}`}
                id="passwordConfirmation"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                value={passwordConfirmation || ''}
                onChange={e => handleChange(e.target.name, e.target.value)}
                required/>
            {errors.has('passwordConfirmation') &&
            <div className="invalid-feedback">{errors.first('passwordConfirmation')}</div>}
        </div>
        <Button className="text-white"
                style={styles.bgColor}
                type="submit"
                disabled={errors.any()}>Sign Up</Button>
        <Typography variant="caption" style={styles.bot}>Back to <Link to="/login"
                                                                    className="btn-link font-weight-bold">Login</Link></Typography>
    </form>)
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
