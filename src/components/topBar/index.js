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
                <Button component={Link} to='/services'>Services</Button>
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
                <Button component={Link} to='/about'>about</Button>
                <Button component={Link} to='/contact'>contact</Button>
            </Toolbar>
        </AppBar>
  );
}