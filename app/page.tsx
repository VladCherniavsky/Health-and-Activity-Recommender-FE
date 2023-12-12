'use client'
import React, {useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useFetchRecommendations from './components/useFetchRecommendations';
import Typography from '@mui/material/Typography';
import RecommendationList from './components/RecommendationList'
import { getDescendingSortByKeyPredicate } from './utils'
import useStyles from './useStyles'


export default function Home() {
    const classes = useStyles()
    const {state, getRecommendations} = useFetchRecommendations()
    const recommendations = state?.data?.data || []
    const handleFormSubmit = (data) => {
        getRecommendations(data)
    }

    const sortedRecommendations = recommendations.sort(getDescendingSortByKeyPredicate('priority'))

    return (
        <div className={classes.container}>
            <Header />
            <Box className={classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.formContainer}>
                            <Form onSubmit={handleFormSubmit} isDisabled={state.isLoading}></Form>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.listContainer}>
                            <Typography sx={{textAlign: 'center'}}>List of Recommendations</Typography>
                            <RecommendationList recommendations={sortedRecommendations}/>
                      </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

