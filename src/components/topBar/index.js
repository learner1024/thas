import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from '../SimpleMenu';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
export default () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography color="inherit" noWrap>
                    TULIP HORTAGRO SERVICES
                </Typography>
                <Button><Link to='/services'>Services</Link></Button>
                <SimpleMenu heading="Projects" items={[
                    {
                        displayText: 'Ongoing Projects',
                        route: 'projects_ongoing'
                    },
                    {
                        displayText: 'Completed Projects',
                        route: 'projects_completed'
                    }
                ]} />
                <Button><Link to='/about'>About us</Link></Button>
                <Button><Link to='/contact'>contact</Link></Button>
            </Toolbar>
        </AppBar>
  );
}