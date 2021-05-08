const styles = theme => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
    },
    banner: {
        backgroundColor: '#dfca4e',
        color: 'black'
    }
});

export default styles; 