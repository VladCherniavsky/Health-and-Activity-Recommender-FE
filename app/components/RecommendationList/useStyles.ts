import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
    listContainer: {
        maxHeight: '460px',
        overflow: 'scroll'
    },
    list: { width: '100%', bgcolor: 'background.paper' }
}))

export default useStyles