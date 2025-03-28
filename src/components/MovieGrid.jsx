import { Box, Container, Grid, InputAdornment, Pagination, Skeleton, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

export default function MovieGrid(){

    //States
    const [search, setSearch]=useState('');
    const [page, setPage]=useState(1);
    const [totalPages, setTotalPages]=useState(0);
    const [movies, setMovies]=useState(null);

    //Fetch movies on search query or page number change
    useEffect(()=>{
        setMovies();
        (async()=>{
            //Get popular movies if no search term
            if(search===''){
                try{
                    const response = await axios.get(
                        import.meta.env.VITE_API_URL+'discover/movie',
                        {
                            params:{
                                page:page
                            },
                            headers:{
                                Authorization:import.meta.env.VITE_API_TOKEN
                            }
                        }
                    );
                    //console.log(response)
                    setMovies(response.data.results);
                    setTotalPages(response.data.total_pages);
                }
                catch(error){
                    console.error(error);
                    setMovies();
                }
            }
            //Get movies by search term
            else{
                try{
                    const response = await axios.get(
                        import.meta.env.VITE_API_URL+'search/movie',
                        {
                            params:{
                                query:search,
                                page:page
                            },
                            headers:{
                                Authorization:import.meta.env.VITE_API_TOKEN
                            }
                        }
                    );
                    //console.log(response);
                    setMovies(response.data.results);
                    setTotalPages(response.data.total_pages);
                }
                catch(error){
                    console.error(error);
                    setMovies();
                }
            }
        })();
    },[ search, page ]);

    return(
        <Box
            sx={{
                p:'3rem 0'
            }}
        >
            <Container
                maxWidth='lg'
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        size={{
                            xs:12,
                            md:6
                        }}
                    >
                        <TextField
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            fullWidth
                            size='small'
                            placeholder='Search movies'
                            slotProps={{
                                input:{
                                    startAdornment:(
                                        <InputAdornment
                                            position='start'
                                        >
                                            <SearchIcon/>
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />
                    </Grid>
                    <Grid
                        size={{
                            xs:12,
                            md:6
                        }}
                    >
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent:'flex-end'
                            }}
                        >
                            <Pagination
                                page={page}
                                onChange={(event, value)=>setPage(value)}
                                count={totalPages}
                                color='primary'
                            />
                        </Box>
                    </Grid>
                    {movies?
                        movies.length?
                            movies.map((movie)=>(
                                <Grid
                                    key={movie.id}
                                    size={{
                                        xs:6,
                                        sm:4,
                                        lg:3
                                    }}
                                >
                                    <Movie
                                        movie={movie}
                                    />
                                </Grid>
                            ))
                        :
                            <Grid
                                size={12}
                            >
                                <Typography
                                    variant='h3'
                                    sx={{
                                        mt:'2rem',
                                        textAlign:'center'
                                    }}
                                >
                                    No movies found
                                </Typography>
                            </Grid>
                    :
                        Array(20).fill(0).map((x, i)=>(
                            <Grid
                                key={i}
                                size={{
                                    xs:6,
                                    sm:4,
                                    lg:3
                                }}
                            >
                                <Skeleton
                                    variant='rounded'
                                    height={400}
                                    sx={{
                                        borderRadius:'0.5rem'
                                    }}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
}