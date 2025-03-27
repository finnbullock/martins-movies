import { Box, Container, Typography } from "@mui/material";

export default function Hero(){

    return(
        <Box
            sx={{
                background:'linear-gradient(#cb3d4c, #87589e)',
                p:{
                    xs:'1rem 0',
                    md:'3rem 0'
                },
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
                        mb:'0.5rem'
                    }}
                >
                    Movies
                </Typography>
                <Typography
                    variant='h2'
                    sx={{
                        opacity:0.75
                    }}
                >
                    Browse movies
                </Typography>
            </Container>
        </Box>
    );
}