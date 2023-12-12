import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
    form: {
        display: 'grid',
        gridRowGap: '38px',
        maxWidth: '400px',
        padding: '16px',
        gridTemplateRows: '50px 50px 50px 50px'
    },
    inputGroup: {
        gridAutoFlow: 'column',
        display: 'grid',
        gridColumnGap: '10px',
        gridTemplateColumns: '200px 96px'
    },
    loader: {
        width: '25px !important',
        height: '25px !important',
        marginLeft: '10px'
    }
}))

export default useStyles