import { makeStyles } from "@mui/styles"

export default makeStyles(() => ({
    modal: {
        borderRadius: '25px',
        height: '70vh',
        overflow: 'auto',
        '& h1': {
            margin: '0',
            // border: '1px solid red',
            color: '#2B2A35',
            marginBottom: '1rem',
            fontSize: '1.2rem',
            fontWeight: '600'
        },
        
        '& p': {
            margin: '0',
            // width: '90%',
            // border: '1px solid green',
            fontSize: '1rem',
            color: '#656565',
            marginBottom: '0.7rem'
        },

        '& form': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        '& h3':{
            margin: '0',
            color: '#2B2A35',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            fontWeight: '500'
        },

        '& input': {
            // border: 'none',
            width: '80%',
            border: '1px solid #C4C4C4',
            borderRadius: '3px',
            marginBottom: '0.8rem',
            padding: '0.5rem 0.5rem',
            fontSize: '1rem',
            
            '&:focus': {
                outline: 'none',
                // border: 'none'
            },

           
        },

        '& div': {
            width: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        '& textarea': {
            width: '80%',
            height: '5rem',
            resize: 'none',
            borderRadius: '3px',
            marginBottom: '1rem',
            border: '1px solid #C4C4C4',
            fontWeight: '400',
            fontSize: '16px',
            color: '#2B2A35',
            padding: '0.4rem 0.8rem 0 0.8rem',

            '&:focus': {
                outline: 'none',
                border: '1px solid #C4C4C4',
            },
        },

        '& option': {
            outline: 'none'
        },

        '& select': {
            width: '100%',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            // color: '#DADADA',
            border: '1px solid #C4C4C4',
            borderRadius: '3px',
            padding: '0.4rem 0 0.4rem 0.4rem',
            // padding: '0.4rem 0.8rem 0 0.8rem',
            marginBottom: '0.8rem',

            '&:focus': {
                outline: 'none',
                // background: 'red'
            }
        },

        '& button': {
            background : 'linear-gradient(90deg, #FF5924 0%, #FF0703 100%)',
            borderRadius: '10px',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '16px',
            padding: '0.6rem 4rem',
            cursor: 'pointer'
        }
    }
}))