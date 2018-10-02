import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from '../SimpleMenu';
import Button from '@material-ui/core/Button';
export default () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography color="inherit" noWrap>
                    TULIP HORTAGRO SERVICES
                </Typography>
                <Button>Services</Button>
                <SimpleMenu heading="Projects" items={["Completed Projects", "Ongoing Projects"]} />
                <Button>About us</Button>
                <Button>Contact us</Button>
            </Toolbar>
        </AppBar>
  );
}