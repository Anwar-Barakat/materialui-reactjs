import { Box, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText } from "@mui/material"
import React from "react"

const MuiRadioField = () => {

    const [years, setYears] = React.useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYears((event.target as HTMLInputElement).value)
    }

    console.log(years);


    return (
        <Box>
            <FormControl>
                <FormLabel id="job-experience-group-label">Years of Experiences</FormLabel>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="" name="years" value={years} onChange={handleChange} area-labelledby="job-experience-group-label">
                        <FormControlLabel control={<Radio size="small" color="secondary" />} label="0-2" value="0-2" color="secondary" />
                        <FormControlLabel control={<Radio size="small" color="secondary" />} label="2-5" value="2-5" color="secondary" />
                        <FormControlLabel control={<Radio size="small" color="secondary" />} label="5-10" value="5-10" color="secondary" />
                        <FormControlLabel control={<Radio size="small" color="secondary" />} label="10+" value="10+" color="secondary" />
                    </RadioGroup>
                    <FormHelperText>Years of Experiences</FormHelperText>
                </FormControl>
            </FormControl>
        </Box>
    )
}

export default MuiRadioField
