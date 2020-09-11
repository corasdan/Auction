import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import { TextField, Grid, IconButton } from '@material-ui/core';

const TextFieldSales = forwardRef((props, ref) => {
    const input = useRef();
    const gridItemSize = props.tooltip ? 11 : 12;

    const [defaultValue, setDefaultValue] = useState(props.value);
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState('');
    const [value, setValue] = useState(props.value ? props.value : '');
    const [changed, setChanged] = useState(false);

    useEffect(e => {
        setValue(props.value);
        setDefaultValue(props.value);
        setChanged(false);
    }, [props.value])


    useImperativeHandle(ref, () => ({

        isChanged() {
            return value !== defaultValue;
        },

        getValue() {
            return value;
        },

        updateValue(newValue) {
            setValue(newValue);
        },

        clear() {
            setValue("");
        },

        refresh() {
            setDefaultValue(value);
        }
    }));

    const handleChange = (event) => {
        const fieldValue = event.target.value;
        setValue(fieldValue);
        setChanged(true);

        // Delays sending change event to parent for specified number of milliseconds. By default is 0
        // if (props.delayedChange) {
        //     const timer = setTimeout(() => {
        //         if (fieldValue === input.current.value) {
        //             props.onChange && props.onChange(event, fieldValue);
        //         }
        //     }, props.delayedChange);

        // } else {
        //     props.onChange && props.onChange(event, event.target.value);
        // }
        
        // return isValid.status;
    }

    return (
        <Grid container alignItems="flex-end">
            <Grid item xs={gridItemSize}>
                <TextField
                    
                    value={value}
                    placeholder={props.placeholder}
                    inputRef={input}
                    type={props.type}
                    fullWidth
                    onChange={event => handleChange(event)} size={props.size} />
            </Grid>
        </Grid>
    );
});

TextFieldSales.defaultProps = {
    variant: "outlined",
    margin: "dense",
    placeholder: "",
    type: "text",
    required: false,
    value: "",
    disabled: false,
    delayedChange: 0
}

export default TextFieldSales;