import React , {useState, useRef}from 'react';
import { Paper, Grid, Button, TextareaAutosize, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import HeaderComponent from '../header/HeaderComponent';
import * as classes from './CarAd.module.css';
import * as converter from './CarAdConverter';
import * as service from '../service/AuctionService';


const CarAd = () => {

    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [carName, setCarName] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');

    const handleTitle= (event) => {
        setTitle(event.target.value);
    }

    const handleCarName = (event) => {
        setCarName(event.target.value);
    }

    
    const handleModel = (event) => {
        setModel(event.target.value);
    }
    
    const handlePrice = (event) => {
        setPrice(event.target.value);
    }
    
    const handleYear = (event) => {
        setYear(event.target.value);
    }
    
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const getFormData = () => {
        const formData = {
            image: imageUrl,
            title: title,
            carName: carName,
            model: model,
            price: price,
            year: year,
            description: description,
        }
        return formData;
    }

    const fileSelectedHandler = (event) => {
        
        const elem = event.target.files[0].name;
        console.log(event.target.files[0].name);
        setImageUrl(String(elem));
    }

    const handleSubmitForm = () => {
        const saveObj = getFormData();
        console.log(saveObj.image);
        
        const carAd = converter.CarAdDtoToCarAd(saveObj);
        service.saveCarListing(carAd).then(response => {
            console.log(response.data);
            console.log("success");
        }).catch(e=> {
            console.log(e);
            console.log("error");
        });
    }

    return (
        <div>
            <HeaderComponent />
            <div className={classes.Main}>
                <Paper className={classes.Container}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography variant="h4">Add a new Car Listing</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                        <Typography variant="h6">Choose Image for Car</Typography>
                        <Button variant="contained" color="primary"  >
                        <input type="file" onChange={fileSelectedHandler} label="Upload Image" />
                            </Button>
                            
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField value={title}  variant="outlined" label={"Title"} onChange={handleTitle} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField value={carName} variant="outlined" label={"Car Name"} onChange={handleCarName}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField value={model} variant="outlined" label={"Model"} onChange={handleModel}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField value={price} variant="outlined" label={"Price"} onChange={handlePrice}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField value={year} variant="outlined" label={"Year"} onChange={handleYear}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField value={description} multiline rows={4}  variant="outlined" label={"Description"} onChange={handleDescription}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button variant="contained" color="primary" onClick={handleSubmitForm} >
                                Save
                            </Button>
                            {/* <Button variant="contained" color="primary" onClick={handleUpdateForm} >
                                Update
                            </Button> */}
                        </Grid>

                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default CarAd;