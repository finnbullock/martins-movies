import { Box, Container, IconButton, Typography } from "@mui/material";
import Menu from "./Menu";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer(){

    return(
        <Box
            sx={{
                background:theme=>theme.palette.primary.main,
            }}
        >
            <Container
                maxWidth='xl'
            >
                <Box
                    sx={{
                        p:'3rem 0',
                        color:'#fff',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                flex:1,
                                fontSize:'1.5rem',
                                fontWeight:600,
                                mb:'0.5rem'
                            }}
                        >
                            Martin's Movies
                        </Typography>
                        <Menu
                            footer
                        />
                    </Box>
                    <Box
                        sx={{
                            display:'flex',
                            gap:'1rem',
                            '& svg':{
                                fill:'#fff'
                            }
                        }}
                    >
                        <IconButton>
                            <FacebookIcon/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton>
                            <XIcon/>
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}