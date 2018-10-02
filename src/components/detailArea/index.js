import React from 'react';
import {Route, Switch} from 'react-router-dom';

const About = (props) => {
    return <h1>About</h1>;
}

const Services = (props) => {
    return <h1>Services</h1>;
}

const Contact = (props) => {
    return <h1>Contact</h1>;
}

const CompletedProjects = (props) => {
    return <h1>Completed Projects</h1>;
}

const OngoingProjects = (props) => {
    return <h1>Ongoing Projects</h1>;
}

export default (props) => {
    return (
        <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/projects_completed" component={CompletedProjects}/>
            <Route path="/projects_ongoing" component={OngoingProjects}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
        
    );
};