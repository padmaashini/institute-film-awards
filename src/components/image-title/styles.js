const styles = theme => ({
    root: {
        color: '#dfca4e',
        textAlign: 'center',
        paddingBottom: '30px'
    },
    container: {
        width: '100%',
        background: 'transparent',
        color: '#dfca4e',
        padding: '10px 50px 50px 50px',
        ...theme.typography.normal,
        textAlign: 'center',
    },
    title: {
        ...theme.typography.heading,
        margin: '20px 20px 0px 20px'
    },
    imageContainer: {
        width: '100%',
        height: '600px',
        overflow: 'hidden'
    },
    backgroundImage:{
        width: '100%',
    },
    heading: {
          border: 'solid',
          padding: '0px !important',
          margin: '0px !important',
          display: 'inline-block',
          background: 'rgba(41, 40, 38, 0.5)',
    },
    searchBar: {
          width: '50%'
    },
    subText: {
        marginTop: '0px'
    }
});

export default styles; 