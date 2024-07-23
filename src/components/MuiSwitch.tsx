import { Box, FormControlLabel, Switch } from "@mui/material"
import React from "react"

const MuiSwitch = () => {
    const [checked, setChecked] = React.useState(false)

    const handleChang = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    console.log(checked);
    

  return (
    <Box>
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              value=""
              checked={checked}
              onChange={handleChang}
              
            />
          }
        />
    </Box>
  )
}

export default MuiSwitch
