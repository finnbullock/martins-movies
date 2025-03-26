const gradient='linear-gradient(#cb3d4c, #87589e)';

const theme={
    palette:{
        primary:{
            main:'#3e4555'
        },
        secondary:{
            main:'#948a99'
        }
    },
    typography:{
        fontFamily:'Quicksand',
        h1:{
            fontSize:'3rem'
        },
        h2:{
            fontSize:'1.5rem'
        }
    },
    components:{
        MuiLink:{
            styleOverrides:{
                root:{
                    fontFamily:'Quicksand',
                    textDecoration:'none',
                    '&:hover':{
                        background:gradient,
                        color:'transparent',
                        backgroundClip:'text'
                    }
                }
            }
        }
    }
};

export default theme;