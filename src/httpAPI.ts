import axios from "axios"


const baseURL = 'https://api.corona-19.kr'
const apiKey = '8uRXaFHE9kTb1LqGVmUgOhe5DCQciMI4f'

export const httpGetSummary = async () => {
    const data = await axios.get<SummaryType>(`${baseURL}/korea/`, {
        params: {
            serviceKey: apiKey
        }
    })

     return data
}