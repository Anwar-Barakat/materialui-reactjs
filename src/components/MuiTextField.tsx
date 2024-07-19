import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
    const [weight, setWeight] = useState<string>('')
    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={4}>
                <TextField id="standard-basic" label="Name" variant="standard" />
                <TextField id="filled-basic" label="Email" variant="filled" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
            </Stack>


            <Stack direction={'row'} spacing={4}>
                <TextField id="standard-basic" label="Name" variant="standard" color='primary' />
                <TextField id="filled-basic" label="Email" variant="filled" color='secondary' />
                <TextField id="outlined-basic" label="Password" variant="outlined" color='error' />
            </Stack>

            <Stack direction={'row'} spacing={4} display={'block'}>
                <TextField id="standard-basic" label="Username" variant="standard" color='primary' size='small' helperText="Helper text" inputProps={{ readOnly: true }} />
                <TextField id="filled-basic" label="Email" variant="filled" color='secondary' size='medium' />
                <TextField id="outlined-basic" label="Password" variant="outlined" color='error' />
                <TextField id="outlined-basic" label="Amount" variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            $
                        </InputAdornment>
                    ),
                }} />
                <TextField id="outlined-basic"
                    label="Weight" value={weight} onChange={(e) => { setWeight(e.target.value) }} error={!weight}
                    helperText={!weight ? 'Please enter weight value' : ''}
                    variant="outlined" InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            KG
                        </InputAdornment>
                    ),
                }} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField
