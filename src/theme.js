const gradient='linear-gradient(#cb3d4c, #87589e)';

const scheme={
    primary:{
        main:'#3e4555'
    },
    grey:'#948a99'
};

const theme={
    palette:scheme,
    typography:{
        fontFamily:'Quicksand'
    },
    components:{
        MuiLink:{
            styleOverrides:{
                root:{
                    fontFamily:'Quicksand',
                    textDecoration:'none',
                    color:scheme.grey,
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