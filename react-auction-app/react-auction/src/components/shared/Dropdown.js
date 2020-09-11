import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Dropdown = (props) => {

    return (
        <React.Fragment>
                <Autocomplete
                    value={props.value} 
                    margin="dense"
                    options={props.items}
                    clearOnEscape={true}
                    renderInput={(params) => <TextField margin="dense" fullWidth {...params} label={props.label} variant="outlined"/>}
                    onChange={props.onSelectedChange} 
                />
        </React.Fragment>
    );
};

export default Dropdown;


