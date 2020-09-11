import React, { useState, useEffect } from 'react';
import Dropdown from '../shared/Dropdown';
// import * as HierarchyService from '../../../services/HierarchyService';
import { Grid } from '@material-ui/core';
import {vehicles} from '../shared/SelectData';
import {carNames} from '../shared/SelectData';

const FilterNavigator = (props) => {
    const [carItems, setCarItems] = useState([]);
    const [modelItems, setModelItems] = useState([]);

    const [car, setCar] = useState(null);
    const [model, setModel] = useState(null);

    

    const handleSelectedCarValue = (event, selectedCar) => {
        props.onCarChange && props.onCarChange(selectedCar);
        clearModelDropdown();

        if (!selectedCar) {
            setCar(null);
            return;
        }

        setCar(selectedCar);
        vehicles.map((car) => {
            if(car.name === selectedCar){
                setModelItems(car.model);
            }
        }
        )
    }

    const handleSelectedModelValue = (event, selectedModel) => {
        setModel(selectedModel);
        props.onModelChange && props.onModelChange(selectedModel);
    }

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Dropdown value={car} items={carNames} label={"Select a Car"} onSelectedChange={handleSelectedCarValue} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Dropdown value={model} items={modelItems} label={"Select a Model"} onSelectedChange={handleSelectedModelValue} />
                </Grid>
            </Grid>

        </React.Fragment>
    );

    function clearModelDropdown() {
        setModelItems([]);
        setModel(null);
    }
}

export default FilterNavigator;

