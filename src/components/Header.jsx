import { Box, Container, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Menu from "./Menu";

export default function Header(){

    return(
        <Container
            maxWidth='xl'
        >
            <Box
                sx={{
                    p:'1rem 0',
                    display:'flex',
                    flexDirection:{
                        xs:'column',
                        md:'row'
                    },
                    alignItems:'center',
                    gap:{
                        xs:'1rem',
                        md:0
                    }
                }}
            >
                <Typography
                    className='gradient'
                    sx={{
                        flex:1,
                        fontSize:'2rem',
                        fontWeight:600
                    }}
                >
                    Martin's Movies
                </Typography>
                <Box
                    sx={{
                        flex:1,
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <Menu/>
                </Box>
                <Box
                    sx={{
                        flex:1,
                        display:'flex',
                        justifyContent:'flex-end',
                        gap:'1rem'
                    }}
                >
                    <IconButton color='primary'>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton color='primary'>
                        <PersonIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
}