import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

const MuiSelectField = () => {
    const [countries, setCountries] = useState<string[]>([])
    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }
    console.log(countries);

    return (
        <Box width={'250px'}>
            <TextField label="Select Country"
                select
                value={countries}
                onChange={handleCountryChange}
                fullWidth SelectProps={{ multiple: true }}
                helperText="Please select your country"    
                
            >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelectField
