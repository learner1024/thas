import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from '../About';
import Services from '../Services';

const Contact = (props) => {
    return (
        <div>
            <p>Mobile Number : +91 842 170 9999 / 827 532 6999</p>
            <p>Email : tuliphortagro@gmail.com</p>
            <p>Website : www.tuliphortagro.com</p>
            <p>Office : Pawar Nagar, Thergaon, Pimpri-Chichwad, Pune.</p>
            
        </div>
    );
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