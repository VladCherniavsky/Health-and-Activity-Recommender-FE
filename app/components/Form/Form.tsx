import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useStyles from './useStyles'
import CircularProgress from '@mui/material/CircularProgress';
import { FormProps, Measure, Unit } from './types'

const initialState = {isError: false,  value: undefined}

export default function Form({onSubmit, isDisabled = false}: FormProps) {
    const [weight, setWeight] = React.useState<Measure>(initialState);
    const [weightUnit, setWeightUnit] = React.useState<Unit>('kg');
    const [height, setHeight] = React.useState<Measure>(initialState);
    const [heightUnit, setHeightUnit] = React.useState<Unit>('cm');
    const [selectedDate, setSelectedDate] = React.useState();
    const classes = useStyles()

    const isSubmitDisabled = !weight.value || !height.value || weight.isError || height.isError

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = () => {
        let isValid = true
        const parsedWeight =  parseFloat(weight.value!)
        const parsedHeight =  parseFloat(height.value!)

        if(isNaN(parsedWeight) || parsedWeight <=0 ) {
            setWeight({value: weight.value, isError: true})
            isValid = false
        }

        if(isNaN(parsedHeight) || parsedHeight <=0) {
            setHeight({value: height.value, isError: true})
            isValid = false
        }

        if(isValid) {
            const birthDate = selectedDate?.unix()
            const payload = {
                height: {
                    value: parsedHeight,
                    unit: heightUnit
                },
                weight: {
                    value: parsedWeight,
                    unit: weightUnit
                },
                birthDate
            }

            onSubmit(payload)
        }


    };

    const handleHeightChange = (event) => {
        setHeight({isError: false, value: event.target.value})
    }
    const handleWeightChange = (event) => {
        setWeight({isError: false, value: event.target.value})
    }

    return (
        <form className={classes.form} >
               <div className={classes.inputGroup}>
                   <TextField
                       error={weight.isError}
                       disabled={isDisabled}
                       label="Weight"
                       value={weight.value}
                       onChange={handleWeightChange}
                       helperText={weight.isError ? 'Incorrect value' : ''}
                   />
                   <Select
                       sx={{maxHeight: '56px'}}
                       disabled={isDisabled}
                       value={weightUnit}
                       onChange={(e) => setWeightUnit(e.target.value)}
                   >
                       <MenuItem value="kg">kg</MenuItem>
                       <MenuItem value="pound">pound</MenuItem>
                   </Select>
               </div>
               <div className={classes.inputGroup}>
                   <TextField
                       disabled={isDisabled}
                       label="Height"
                       value={height.value}
                       onChange={handleHeightChange}
                       helperText={height.isError ? 'Incorrect value' : ''}
                   />
                   <Select
                       sx={{maxHeight: '56px'}}
                       disabled={isDisabled}
                       value={heightUnit}
                       onChange={(e) => setHeightUnit(e.target.value)}
                   >
                       <MenuItem value="cm">cm</MenuItem>
                       <MenuItem value="feet">feet</MenuItem>
                   </Select>
               </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Basic date picker" disabled={isDisabled} onChange={handleDateChange} />
                </LocalizationProvider>
                <Button
                    disabled={isDisabled || isSubmitDisabled}
                    size="big"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Get Recommendations {isDisabled && <CircularProgress className={classes.loader}/>}
                </Button>
        </form>
    );
}