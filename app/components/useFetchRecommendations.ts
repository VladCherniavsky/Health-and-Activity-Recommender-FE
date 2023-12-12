import { useState } from 'react'
import { post } from '../services/httpClient'

const url = 'https://fq96n8p0f6.execute-api.us-east-1.amazonaws.com/dev/recommendation'

const useFetchRecommendations = () => {
    const [state, setState] = useState({
        isLoading: false,
        data: undefined,
        error: undefined
    })

    const getRecommendations =  async (data) => {
        try {
            setState((current) => {
                return {
                    ...current,
                    isLoading: true,
                }
            })
            const response = await post(url, data)
            setState((current) => {
                return {
                    isLoading: false,
                    data: response,
                    error: undefined
                }
            })
        }catch (err) {
            setState((current) => {
                return {
                    ...current,
                    isLoading: false,
                    error: err
                }
            })
        }

    }
    return {
        getRecommendations,
        state
    }
}

export default useFetchRecommendations