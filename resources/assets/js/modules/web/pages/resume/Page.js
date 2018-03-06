import React from "react"

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {ListItemText} from 'material-ui/List';
import {MenuItem} from 'material-ui/Menu';


import List from './components/List'
import Profile from './components/Profile'
import Interest from './components/Interest'
import Language from './components/Language'
import ListContainer from './components/ListContainer'
import Projects from './components/Projects'
import Github from './components/Github'

function Page() {

    return (
        <Paper className="container my-5">
            <Grid container spacing={24}>

                <Grid item md={4} xs={12}>
                    <Profile/>
                    <Interest/>
                    <Language/>
                </Grid>
                <Grid item md={8} xs={12}>

                    <Typography variant="display3">
                        Frontend Developer
                    </Typography>
                    <Divider className="mb-4"/>

                    <ListContainer type="work">
                        <List name="Trends" role="Web Developer" time="Jul 2017 - Present"
                              location="49B Main Highway, Ellerslie, Auckland"
                              logo="https://trendsideas.com/img/trends-logo-2017.svg"
                              link="https://trendsideas.com/"
                        />
                        <List name="Smart Zeta" role="Frontend Developer (Contractor)" time="11/2016 to 04/2017"
                              location="28 Constellation Drive, Rosedale, Auckland"
                              logo="https://pbs.twimg.com/profile_images/786465383569960960/cJEBELGq_400x400.jpg"
                              link="https://www.zetaapp.co.nz/"
                        />
                        <List name="SoulTelco" role="Web and App Developer" time="08/2016 to 11/2016"
                              location="5 Flower Street, Eden Terrace, Auckland "
                              logo="https://scontent.fhlz1-1.fna.fbcdn.net/v/t1.0-1/13716193_366023646854701_5567973683126876175_n.png?oh=3fdfaa825e297103e417f8de2121984a&oe=5B01C1BE"
                              link="http://soultelco.com/"
                        />
                        <List name="GreenSpot" role="Web developer" time="06/2014 to 08/2015"
                              location="945A New North Rd, Mt Albert, Auckland"
                              logo="http://www.greenspot.net.nz/img/logo.png"
                              link="http://www.greenspot.net.nz/"
                              last
                        />
                    </ListContainer>
                    <ListContainer type="education">
                        <List name="Unitec" role="Bachelor of Computing System" time="04/2015-07/2016"
                              location="139 Carrington Rd, Mount Albert, Auckland 1025"
                              logo="https://flo2cash.com/nz/wp-content/uploads/2016/05/unitec-1024x414.png"
                              link="http://www.unitec.ac.nz/"
                              last
                        />
                    </ListContainer>

                    <ListContainer type="project">
                        <Projects>
                            <Github primary="redux-laravel" secondary="CRUD with react 16 and laravel 5.5"
                                    link="https://github.com/Tim1023/redux-laravel"/>
                            <Github primary="Vue-laravel-jwt-spa" secondary="Vue 2 Laravel 5.5 JWT boilerplate"
                                    link="https://github.com/Tim1023/Vue-laravel-jwt-spa"/>
                            <Github primary="SmartForm_Ioinic_Firebase" secondary="Angular Ionic Firebase  "
                                    link="https://github.com/Tim1023/SmartForm_Ioinic_Firebase"/>
                            <Github primary="foodBooking_react" secondary="Food booking frontend"
                                    link="https://github.com/Tim1023/foodBooking_react"/>
                            <Github primary="dashboard_react" secondary="Food booking dashboard"
                                    link="https://github.com/Tim1023/dashboard_react"/>
                        </Projects>
                    </ListContainer>
                    <ListContainer type="skills">
                        <Typography variant="title" className="text-secondary pt-3 pl-5" gutterBottom>
                            Web
                        </Typography>
                        <Typography variant="subheading" className="text-secondary ml-3  pl-5" gutterBottom>
                            Javascript(React/Redux, Vue/Vuex, AngularJs), HTML, CSS, SASS
                        </Typography>
                        <Typography variant="title" className="text-secondary pt-3 pl-5" gutterBottom>
                            Server
                        </Typography>
                        <Typography variant="subheading" className="text-secondary ml-3  pl-5 pb-3" gutterBottom>
                            Php(Laravel), C#(.NET)
                        </Typography>
                    </ListContainer>
                </Grid>

            </Grid>
        </Paper>
    );
}


export default (Page);
