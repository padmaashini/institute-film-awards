const styles = theme => ({
    container: {
        ...theme.typography.normal, 
        padding: '10px 60px', 
        color: '#dfca4e'
    },
    emptyContainer: {
        ...theme.typography.normal,
        color: 'black',
        marginTop: '100px', 
        textAlign: 'center',
        '& p': {
            display: 'inline-block',
            backgroundColor: 'rgba(255, 239, 150, 0.5)',
            border: 'solid',
            borderColor: '#dfca4e',
            padding: '30px',
            color: 'black'
        }
    }
});

export default styles; 