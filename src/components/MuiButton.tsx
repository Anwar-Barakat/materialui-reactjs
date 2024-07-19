import { ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SendIcon from '@mui/icons-material/Send';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import { useState } from 'react';

const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([])
    console.log(formats)

    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string[]
    ) => {
        setFormats(updatedFormats)
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <Button variant="text" href='https://google.com'>Text Button</Button>
                <Button variant="outlined" >REGISTER</Button>
                <Button variant="contained" >GO BACK</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="text" color='primary'>Primary</Button>
                <Button variant="outlined" color='secondary'>Secondary</Button>
                <Button variant="contained" color='error'>Error</Button>
                <Button variant="contained" color='success'>Success</Button>
                <Button variant="contained" color='info'>Info</Button>
            </Stack>
            <Stack spacing={2} direction={"row"} display={'block'}>
                <Button variant="contained" color='primary' size='small'>Small</Button>
                <Button variant="contained" color='primary' size='medium'>Medium</Button>
                <Button variant="contained" color='primary' size='large'>Large</Button>
            </Stack>
            {/*  button with icons */}
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color='primary' size='large' startIcon={<AddCircleOutlineIcon />}>Submit</Button>
                <Button variant="contained" color='secondary' size='large' endIcon={<HighlightOffIcon />}>Delete</Button>
            </Stack>

            {/* Icon Button */}
            <Stack spacing={2} direction={"row"}>
                <IconButton color='primary' size='small' area-label="send" title='Send' onClick={() => alert('hi')}>
                    <SendIcon />
                </IconButton>
            </Stack>

            {/* Button Group */}
            <Stack spacing={2} direction={"row"} >
                <ButtonGroup variant="outlined" color='secondary' orientation='vertical' size='small'>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup
                    // exclusive
                    value={formats}
                    color={'success'}
                    onChange={handleFormatChange}
                    aria-label='text formatting'>
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBold />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalic />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underline'>
                        <FormatUnderlined />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButton
