import React, {Component} from 'react'
import Typography from 'material-ui/Typography';
import PropTypes from "prop-types";
import Paper from 'material-ui/Paper';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import CodeIcon from 'material-ui-icons/Code';
import SkillIcon from 'material-ui-icons/PlusOne';

class ListContainer extends Component {

    static displayName = "ListContainer"
    static propTypes = {
        children: PropTypes.node.isRequired,
        type: PropTypes.string.isRequired,
    };


    render() {
        const {children, type} = this.props;

        switch (type) {
            case "work":
                return <Paper className="container mb-5 ">
                    <div className="row pt-3 px-3 text-secondary ">

                        <WorkIcon/>
                        <Typography variant="title" color="inherit"
                                    className="pl-2"> Work Experience </Typography>
                    </div>
                    {children}

                </Paper>
            case "education":
                return <Paper className="container mb-5 ">
                    <div className="row pt-3 px-3 text-secondary ">

                        <SchoolIcon/>
                        <Typography variant="title" color="inherit"
                                    className="pl-2"> Education </Typography>
                    </div>
                    {children}
                </Paper>
            case "project":
                return <Paper className="container mb-5 ">
                    <div className="row pt-3 px-3 text-secondary ">

                        <CodeIcon/>
                        <Typography variant="title" color="inherit"
                                    className="pl-2"> Personal Projects </Typography>
                    </div>
                    {children}
                </Paper>
            case "skills":
                return <Paper className="container mb-5 ">
                    <div className="row pt-3 px-3 text-secondary ">

                        <SkillIcon/>
                        <Typography variant="title" color="inherit"
                                    className="pl-2">Professional Skills </Typography>
                    </div>
                    {children}
                </Paper>
        }

    }

}


export default (ListContainer);
