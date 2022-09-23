import ApiConnector from "../../helpers/ApiConnector";

const getUserInfo = async () => {
    const token = localStorage.getItem('token');
    const response = await ApiConnector.get(`/me`,{
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })

    console.log(response.data);
    return response.data;
}

export const UserService = {
    getUserInfo
}