import React, { useState } from 'react';
import * as manageCss from './CarFilter.module.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import FilterNavigator from '../shared/FilterNavigator';
import Dropdown from '../shared/Dropdown';
import * as selectData from '../shared/SelectData';
import { range } from '../../service/UtilityService';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 130,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const CarFilter = (props) => {
    const classes = useStyles();

    const [car, setCar] = useState(null);
    const [model, setModel] = useState(null);
    const [priceFrom, setPriceFrom] = useState(null);
    const [priceTo, setPriceTo] = useState(null);
    const [yearFrom, setYearFrom] = useState(null);
    const [yearTo, setYearTo] = useState(null);

    const [indexSelected, setIndexSelected] = useState(null);

    const years = range(2000, 2020, 1);
    const yearsList = years.map(String);

    const prices = range(0, 25000, 5000);
    const pricesList = prices.map(String);
    const pricesArray = [];
    pricesList.map((item) => {
        pricesArray.push(item + ' €');
    })

    const handleCar = (carValue) => {
        setCar(carValue);
        setModel(null);
    }

    const handleModel = (modelValue) => {
        setModel(modelValue);
    }

    const handlePriceFrom = (event, selectedPrice) => {
        setPriceFrom(selectedPrice);
        setPriceTo(null);
    }

    const handlePriceTo = (event, selectedPrice) => {
        setPriceTo(selectedPrice);
    }

    const handleYearFrom = (event, selectedYear) => {
        setYearFrom(selectedYear);
        setYearTo(null);
    }

    const handleYearTo = (event, selectedYear) => {
        setYearTo(selectedYear);
    }

    return (
        <div >
            <Paper className={manageCss.Container}>
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <FilterNavigator onCarChange={handleCar} onModelChange={handleModel} />
                    </Grid>
                    <Grid item md={2}>
                        <Dropdown value={priceFrom} items={pricesArray} label={"Price From"} onSelectedChange={handlePriceFrom} />
                    </Grid>
                    <Grid item md={2}>
                        <Dropdown value={priceTo} items={pricesArray} label={"Price to"} onSelectedChange={handlePriceTo} />
                    </Grid>
                    <Grid item md={2}>
                        <Dropdown value={yearFrom} items={yearsList} label={"Year from"} onSelectedChange={handleYearFrom} />
                    </Grid>
                    <Grid item md={2}>
                        <Dropdown value={yearTo} items={yearsList} label={"Year to"} onSelectedChange={handleYearTo} />
                    </Grid>
                    <Grid item md={1} >
                        <div className={manageCss.Button}>
                            <Link to="/search">
                                <Button variant="contained" color="secondary"  >
                                    Search
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default CarFilter;