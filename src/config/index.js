/* export const config = {	
    apiUrl: process.env.API_URL,
    appUrl: process.env.APP_URL
} */

export const config = () => {
    return {
        apiUrl: process.env.REACT_APP_API_URL,
        appUrl: process.env.REACT_APP_APP_URL
    }
}