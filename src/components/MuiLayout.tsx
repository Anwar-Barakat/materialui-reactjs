import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Paper, Stack, Typography } from "@mui/material"

const MuiLayout = () => {
    return (
        <>
            <Paper>
                <Stack direction={'row'} spacing={2} divider={<Divider orientation="vertical" />}>
                    <Box component={'span'} sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        width: '300px',
                        '&:hover': {
                            backgroundColor: 'secondary.main'
                        },
                        p: 2
                    }} p={2} boxShadow={3}>
                        hello
                    </Box>
                </Stack>
            </Paper>
            <Box width={'300px'}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://th.bing.com/th/id/R.18f14463a91f8316ec8daea09ab5baaf?rik=1ONxPv6onaga7A&pid=ImgRaw&r=0"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>

    )
}

export default MuiLayout
