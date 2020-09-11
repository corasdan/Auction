import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import * as manageCss from './ResultView.module.css';
import HeaderComponent from '../header/HeaderComponent'
import * as service from '../service/AuctionService';
import { Link } from 'react-router-dom';
import * as converter from '../carAd/CarAdConverter';


const useStyles = makeStyles({
    root: {
        maxWidth: 845,
    },
    media: {
        height: 100,
    },
});

const ResultView = () => {

    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);

    const toggleNumber = () => {
        setShow(!show);
    }


    useEffect(() => {
        service.getAllCarListings().then(response => {
            console.log(response.data);
            setItems(response.data);
        }).catch(e => {
            console.log(e);
        })
    }, [])

    const handleDelete = (listing) => {
        console.log(listing);
        const obj = converter.CarAdDtoToCarAd(listing);
        obj.name = listing.name;
        console.log(obj);
        
        service.deletePost(obj.title).then(response => {
            console.log(response);
        }).catch(e =>{
            console.log(e)
        })
        }

    return (
        <div>
            <HeaderComponent />
            <div className={manageCss.Main}>
                <Paper className={manageCss.Paper}>
                    <Grid container spacing={1} >
                        <Grid item xs={12} md={12}>
                            <Typography variant="h4">Results</Typography>
                        </Grid>
                        {items.map((listing, index) => (
                            <Grid item xs={12} md={12} >
                                <Card className={manageCss.Container}>
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
                                                Price: {listing.price + " €"}
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
                                        <Link to="/form">
                                            <Button size="small" color="primary" >
                                                Update
                                        </Button>
                                        </Link>
                                        <Button size="small" color="primary" onClick={() => handleDelete(listing)}>
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}




                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default ResultView;