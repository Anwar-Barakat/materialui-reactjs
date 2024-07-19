import { Typography } from '@mui/material'

const MuiTypography = () => {
    return (
        <div>
            <Typography variant="subtitle1">H1 Heading</Typography>
            <Typography variant="h2">H2 Heading</Typography>
            <Typography variant="h3">H3 Heading</Typography>
            <Typography variant="h4" component="h2" gutterBottom>H4 Heading</Typography>
            <Typography variant="h5">H5 Heading</Typography>
            <Typography variant="h6">H6 Heading</Typography>

            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quae sed assumenda accusantium ea explicabo nulla rem quasi officiis ab!</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptas qui. Tempora non itaque facere corrupti nisi. Maxime qui voluptatem iste enim, temporibus, cupiditate mollitia vitae commodi possimus alias dolorem.</Typography>
        </div>
    )
}

export default MuiTypography
