const gradient='linear-gradient(#cb3d4c, #87589e)';

const theme={
    palette:{
        primary:{
            main:'#3e4555'
        },
        secondary:{
            main:'#948a99'
        },
        gradient:gradient
    },
    typography:{
        fontFamily:'Quicksand',
        h1:{
            fontSize:'3rem'
        },
        h2:{
            fontSize:'1.5rem'
        },
        h3:{
            fontSize:'1.5rem',
            fontWeight:500
        },
        p:{
            fontSize:'0.9rem',
            fontFamily:'Quicksand'
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