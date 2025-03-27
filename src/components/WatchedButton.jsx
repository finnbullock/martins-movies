import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WatchedButton({ movieID }){

    //Watched status
    const [watched, setWatched]=useState(false);

    //Get initial watched status
    useEffect(()=>{
        (async()=>{
            try{
                const response = await axios.get(
                    import.meta.env.VITE_API_URL+'movie/'+movieID+'/account_states',
                    {
                        headers:{
                            Authorization:import.meta.env.VITE_API_TOKEN
                        }
                    }
                );
                //console.log(response)
                setWatched(response.data.watchlist);
            }
            catch(error){
                console.error(error);
            }
        })();
    },[movieID]);

    //Toggle watched status
    async function toggleWatched(){
        try{
            const response = await axios.post(
                import.meta.env.VITE_API_URL+'account/21907901/watchlist',
                {
                    media_type: 'movie',
                    media_id: movieID,
                    watchlist: !watched
                },
                {
                    headers:{
                        Authorization:import.meta.env.VITE_API_TOKEN
                    }
                }
            );
            if(response.data.success){
                setWatched(!watched);
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return(
        <Button
            onClick={toggleWatched}
            variant='contained'
            sx={{
                p:'0.25rem 0.5rem',
                textTransform:'none',
                background: theme=> watched? theme.palette.gradient : theme.palette.primary.main,
                display:'flex',
                alignItems:'center',
                gap:'0.5rem'
            }}
        >
            Watched
            {watched?
                <VisibilityIcon fontSize="sm"/>
            :
                <VisibilityOffIcon fontSize="sm"/>
            }
        </Button>
    );
}