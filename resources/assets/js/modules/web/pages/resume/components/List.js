import React from "react"
import {withStyles} from 'material-ui/styles';
import LocationIcon from 'material-ui-icons/LocationOn';
import PropTypes from "prop-types";
import Typography from 'material-ui/Typography';


const displayName = "HomePageHeader"
const styles = {
    roundMark: {
        border: '1px solid #DCDCDC',
        borderRadius: 25,
        display: 'inline-block',
        width: 10,
        height: 10,
        position: 'absolute',
        marginLeft: -17,
        marginTop: 3,
    },
    date: {
        display: 'block',
        color: '#999999',
        marginTop: 10,
        fontSize: 12,
    },
    work: {
        marginLeft: '-0.8rem',
        borderLeft: '1px solid #dee2e6',
        paddingLeft: '1rem'
    },
    dateContainer: {
        marginLeft: 50,
        paddingLeft: 10,
    },
    leftBorder: {
        borderLeft: '1px solid #DCDCDC',
        paddingTop: 10,
        marginTop: -6,
        marginLeft: -12,
        paddingLeft: 12,
        marginBottom: -13,
        paddingBottom: 13,
    },
    noBorder: {
        paddingTop: 10,
        marginTop: -6,
        marginLeft: -12,
        paddingLeft: 12,
        marginBottom: -13,
        paddingBottom: 13,
    },
    at: {
        color: '#40BFED',
        fontSize: '1.2rem'
    },
    location: {
        fontSize: 12,
        display: 'block',
        color: '#999999',
        marginLeft: 20,
        '& svg': {
            width: 18,
            height: 18
        }
    },
    companyContainer: {
        marginLeft: 30,
        marginTop: 15,
        marginBottom: 15,
    },
    companyEntry: {
        display: 'inline-block',
        paddingLeft: 55,
        margin: 5,
        height:30,
        '& img': {
            position: 'absolute',
            marginLeft: -55,
            height: 45,
        }
    }
};

function List(props) {
    const {classes, name, role, time, location, logo, link, last} = props;

    return <div className={classes.dateContainer}>

        <span className={classes.date}><div className={classes.roundMark}/>
            {time}</span>
        <div className={last? classes.noBorder: classes.leftBorder}>
            <Typography variant="subheading" color="inherit" className="text-secondary"> {role} <a
                href={link}
                target="_blank" rel="noopener noreferrer"
                className={classes.at}>@{name}</a></Typography>
            <span
                className={classes.location}><LocationIcon/>{location}</span>

            <div className={classes.companyContainer}>
                <a href={link}
                   target="_blank" rel="noreferrer noopener" className={classes.companyEntry}>
                    <img src={logo}/>
                </a>
            </div>

        </div>
    </div>
}

List.displayName = displayName

List.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    logo: PropTypes.string,
    link: PropTypes.string.isRequired,
    last: PropTypes.bool

};

export default withStyles(styles)(List);
