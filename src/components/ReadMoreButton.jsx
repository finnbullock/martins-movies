import { Button } from "@mui/material";
import axios from "axios";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ReadMoreButton({ movieID }){

    //Get IMDB id of movie
    async function readMore(){
        try{
            const response = await axios.get(
                import.meta.env.VITE_API_URL+'movie/'+movieID+'/external_ids',
                {
                    headers:{
                        Authorization:import.meta.env.VITE_API_TOKEN
                    }
                }
            );
            const imdb=response.data.imdb_id;
            if(imdb){
                window.open('https://www.imdb.com/title/'+imdb, '_blank');
            }
            else{
                window.alert('No IMDB title for this movie');
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return(
        <Button
            variant='contained'
            onClick={readMore}
            sx={{
                p:'0.25rem 0.5rem',
                textTransform:'none',
                background: theme=> theme.palette.primary.main,
                display:'flex',
                alignItems:'center',
                gap:'0.5rem'
            }}
        >
            Read More
            <OpenInNewIcon fontSize="sm"/>
        </Button>
    );
}