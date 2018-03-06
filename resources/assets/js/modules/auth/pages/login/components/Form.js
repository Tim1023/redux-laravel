import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import blue from "material-ui/colors/blue";
import Typography from 'material-ui/Typography';

const displayName = 'LoginForm'
const propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    remember: PropTypes.bool,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}
const styles = {
    backgroundColor: blue["500"],
}

const Form = ({email, password, remember, errors, handleChange, handleSubmit}) => (
    <form className="form" role="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="headline" >Please sign in</Typography>
        <div className="form-group">
            <TextField label="Email"
                       type="text"
                       className={`form-control form-control-lg rounded-0 ${errors.has('email') && 'is-invalid'}`}
                       name="email"
                       id="email"
                       placeholder="Email address"
                       value={email || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}
                       required
                       autoFocus/>
            {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
        </div>
        <div className="form-group">
            <TextField label="Password"
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
        {/*<div>*/}
            {/*<label className="custom-control custom-checkbox">*/}
                {/*<input type="checkbox"*/}
                           {/*name="remember"*/}
                           {/*className="custom-control-input"*/}
                           {/*onChange={e => handleChange(e.target.name, !remember)}/>*/}
                {/*<span className="custom-control-indicator"/>*/}
                {/*<span className="custom-control-description small">Remember me on this computer</span>*/}
            {/*</label>*/}
        {/*</div>*/}
        <Button className="text-white"
                style={styles}
                type="submit"
                disabled={errors.any()}>Sign In
        </Button>
        <Typography variant="caption" className="p-3 ">Not a member? <Link to='/register'>Signup here</Link></Typography>
    </form>
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
