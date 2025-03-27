import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ReadMoreButton({ movieID }){

    //IMDB link to movie
    const [link, setLink]=useState('#');

    //Get IMDB id of movie
    useEffect(()=>{
        (async()=>{
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
                    setLink('https://www.imdb.com/title/'+imdb);
                }
                else{
                    setLink('#');
                }
            }
            catch(error){
                console.error(error);
                setLink('#');
            }
        })();
    },[movieID]);

    return(
        <Button
            variant='contained'
            component='a'
            href={link}
            target='_blank'
            disabled={link==='#'} //Disable button if no IMDB id
            sx={{
                p:'0.25rem 0.5rem',
                textTransform:'none',
                backgroundColor:theme=>theme.palette.primary.main+' !important',
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