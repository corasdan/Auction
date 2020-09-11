import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import * as manageCss from './TopCars.module.css';
import * as service from '../service/AuctionService';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});



const TopCars = () => { //use item.map() to display every car

    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        service.getAllCarListings().then(response => {
            console.log(response.data);
            setItems(response.data);
        }).catch(e => {
            console.log(e);
        })
    }, [])

    const toggleNumber = () => {
        setShow(!show);
    }

    const classes = useStyles();
    return (
        <div>
            <Paper className={manageCss.Paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4">Top Deals</Typography>
                    </Grid>
                    {items.map((listing) => (
                        <Grid item xs={6} md={4} key={listing.name}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <img src={"images/" + listing.image} alt="" className={manageCss.Image} />
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {listing.title}
                                    </Typography>
                                    
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {listing.description}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Brand: {listing.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                        Price: {listing.price+" €"}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            First Registration: {listing.year}
                                        </Typography>
                                        
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={toggleNumber}> 
                                        Contact
                             </Button>
                                    {show && 
                                        <Typography>07XXXXXXXX</Typography>
                                    }
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}


                </Grid>
            </Paper>
        </div>
    );
};

export default TopCars;