import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'min-content'
    },
    content: {
        display: 'grid',
        margin: '0 5%',
        alignItems: 'center'
    },
    formContainer: {
        display: 'grid',
        justifyContent: 'center',
        height: '500px',
        alignItems: 'center'
    },
    listContainer: {
        height: '500px',
        padding: '10px',
        boxSizing: 'border-box',
        overflow:'hidden'
    }
}))

export default useStyles