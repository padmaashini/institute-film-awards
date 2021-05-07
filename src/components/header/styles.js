const styles = (theme) => ({
  header: {
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    "@media (max-width: 780px)": {
      width: '100% !important'
    },
  },
  root: {
    flexGrow: 1,
    ...theme.typography.normal
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    ...theme.typography.normal
  },
  text:{
    ...theme.typography.normal
  },
  container: {
    background: 'transparent', 
    color: '#dfca4e', 
    width: '100%', 
    boxShadow: 'none !important'
  }
})

export default styles; 