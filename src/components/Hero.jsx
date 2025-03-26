import { Box, Container, Typography } from "@mui/material";

export default function Hero(){

    return(
        <Box
            sx={{
                background:'linear-gradient(#cb3d4c, #87589e)',
                height:200,
                display:'flex',
                alignItems:'center'
            }}
        >
            <Container
                maxWidth='lg'
                sx={{
                    color:'#fff'
                }}
            >
                <Typography
                    variant='h1'
                    sx={{
                        mb:'1rem'
                    }}
                >
                    Movies
                </Typography>
                <Typography
                    variant='h2'
                >
                    Browse movies
                </Typography>
            </Container>
        </Box>
    );
}