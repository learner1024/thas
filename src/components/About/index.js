import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography, Divider} from '@material-ui/core'
import Content from './content';
import './about.scss';
export default props => {
    return (
        <Card>
            <CardActionArea>
                {/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile" /> */}
                <CardContent>
                    <ul id='about-card-content'>
                        {Content.items.map((i, indx) => <li key={indx}>
                            {i}
                        </li>)}
                    </ul>
                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
};