const styles = theme => ({
    container: {
        color: '#dfca4e',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
       "@media (max-width: 780px)": {
            width: '100% !important'
        },
        borderRadius: '20px',
        marginTop: '10px',
        padding: '20px 0px',
        background: 'linear-gradient(94.97deg, #151513 -0.94%, #0D0C11 101.96%)'
    },
    poster: {
        height: '200px',
        maxWidth: '150px',
    },
    plot: {
       fontSize: '14px !important',
       color: '#dae0db'
    },
    genre: {
        fontSize: '14px !important',
        color: '#2B6ABC'
    },
    text: {
       textAlign: 'left !important',
       color: '#D7AC39',
       fontSize: '22px'
    },
    disabledButton: {
       backgroundColor: '#666c91 !important',
       color: 'black !important'
    },
    maxLimitReached: {
       fontSize: '12px',
       maxWidth: '150px',
       overflowWrap: 'break-word',
       textAlign: 'center',
       marginLeft:'auto',
       marginRight: 'auto'
    },
    ratingsContainer: {
        display: 'flex', 
        gap: '20px'
    },
    individualRating: {
        display: 'block', 
        marginRight: '15px !important', 
        color: 'white'
    },
    ratingIcon: {
        height: '50px', 
        width: '50px', 
        lineHeight: '50px', 
        borderRadius: '50%', 
        color: 'white !important',
        fontWeight: '500 !important',
        fontSize: '14px', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        textAlign: 'center'
    },
    ratingSource: {
        fontSize: '14px', 
        maxWidth: '113px', 
        overflowWrap: 'break-word', 
        textAlign: 'center', 
        color: '#F3AA4E'
    },
    removeButton: {
        marginTop: '20px', 
        width: '106px', 
        backgroundColor: '#c2104f'
    }
});

export default styles; 