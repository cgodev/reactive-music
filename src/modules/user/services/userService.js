import Cookies from "js-cookie";
import ApiConnector from "../../helpers/ApiConnector";
import { ManageToken } from "../../helpers/ManageToken";

const getUserInfo = async () => {
    let data = {};

    try {
        data = await getData();
    } catch (error) {
        await ManageToken.refreshToken("HOST_ROLE");
        data = await getData();
    }

    console.log(data);
    return data;
}

async function getData(){
    const token = Cookies.get('token');
    const { data } = await ApiConnector.get(`/me`,{
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    return data;
}

export const UserService = {
    getUserInfo
}