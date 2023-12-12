import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useStyles from './useStyles'

export const RecommendationList = ({recommendations}) => {
    const classes = useStyles();

    const renderListItem = (recommendation) => {
        return (
            <>
                <ListItem alignItems="flex-start" key={recommendation.title}>
                    <ListItemText
                        primary={recommendation.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {recommendation.details}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"  sx={{marginLeft: 0}}/>
            </>
        )
    }
    return (
        <div className={classes.listContainer}>
            <List className={classes.list}>
                {recommendations?.length ? recommendations.map(renderListItem): <Typography>No data</Typography>}
            </List>
        </div>
    )
}

export default RecommendationList