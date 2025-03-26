import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export default function Header(){

    const menu=[
        'Home',
        'Movies',
        'Blog',
        'Contact'
    ];

    return(
        <Container
            maxWidth='xl'
        >
            <Box
                sx={{
                    display:'flex',
                    alignItems:'center',
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
                        display:'flex',
                        gap:'1rem'
                    }}
                >
                    {menu.map((item)=>(
                        <Link
                            key={item}
                            href='#'
                            className={item==='Movies'? 'gradient' : ''}
                            sx={{
                                fontSize:'1.2rem',
                                fontWeight:400
                            }}
                        >
                            {item}
                        </Link>
                    ))}
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