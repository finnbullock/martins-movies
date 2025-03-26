import { Box, Link } from "@mui/material";

export default function Menu({ footer=false }){

    const menu=[
        'Home',
        'Movies',
        'Blog',
        'Contact'
    ];

    return(
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
                        fontSize: footer? '1rem' : '1.2rem',
                        fontWeight:400,
                        color: theme=> footer? '#fff' : theme.palette.secondary.main
                    }}
                >
                    {item}
                </Link>
            ))}
        </Box>
    );
}