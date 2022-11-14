import { API_URL, FIXED_PARAMS, FILTER_PARAM_NAME } from './constants'
import { apiResponse } from './types'
export const callAPI = async (params?: string) => {
    const encodedParams =  params ? `${FILTER_PARAM_NAME + encodeURIComponent(params)}&` : ''
    const url = `${API_URL}?${encodedParams}${FIXED_PARAMS}`
    const data: apiResponse = await fetch(url).then((response) => response.json())
    return data
}