import { Box, Typography } from "@mui/material";
import WatchedButton from "./WatchedButton";
import ReadMoreButton from "./ReadMoreButton";

export default function Movie({movie}){

    //console.log(movie)

    return(
        <Box
            sx={{
                overflow:'clip',
                height:400,
                borderRadius:'0.5rem',
                backgroundImage:'url(https://image.tmdb.org/t/p/w500'+movie.poster_path+')',
                backgroundSize:'cover',
                backgroundPosition:'top'
            }}
        >
            <Box
                sx={{
                    p:'1rem',
                    height:'calc(100% - 2rem)',
                    background:'linear-gradient(transparent 0%, rgba(0,0,0,0.85) 50%)',
                    color:'#fff',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'flex-end',
                    gap:'0.5rem'
                }}
            >
                <Typography
                    variant='h3'
                    sx={{
                        textAlign:'center'
                    }}
                >
                    {movie.title}
                </Typography>
                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        textAlign:'center'
                    }}
                >
                    {movie.overview.length>100?
                        movie.overview.substring(0, 100)+'...'
                    :
                        movie.overview
                    }
                </Typography>
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:{
                            xs:'column',
                            md:'row'
                        },
                        gap:'0.5rem'
                    }}
                >
                    <WatchedButton
                        movieID={movie.id}
                    />
                    <ReadMoreButton
                        movieID={movie.id}
                    />
                </Box>
            </Box>
        </Box>
    );
}