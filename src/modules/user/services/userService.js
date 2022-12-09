import Cookies from "js-cookie";
import ApiConnector from "../../helpers/ApiConnector";
import { ManageToken } from "../../helpers/ManageToken";
import axios from "axios";
import { config } from "../../../config";

const getUserInfo = async () => {
    let data = {};

    try {
        data = await getData();
    } catch (error) {
        await ManageToken.refreshToken("HOST_ROLE");
        data = await getData();
    }

    // console.log(data);
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

async function createUser(data){
    try {
        const response = await axios.post(`${config().apiUrl}/users/`, data);
        return response.data;

    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}


async function createCredentials(data){
    try{
        const response = await axios.post(`${config().apiUrl}/credentials/`, data, {
            headers: {
                'x-token': localStorage.getItem('token') || '',
            }
        })
        return response.data;
    }catch(error){
        console.log(error);
        return error.response.data;
    }
}

async function updateCredentials(data){
    try{
        const response = await axios.put(`${config().apiUrl}/credentials/${data.id}`, data, {
            headers: {
                'x-token': localStorage.getItem('token') || '',
            }
        })
        return response.data;
    }catch(error){
        console.log(error);
        return error.response.data;
    }
}



async function getCredentials(){
    try{
        const response = await axios.get(`${config().apiUrl}/credentials/`, {
            headers: {
                'x-token': localStorage.getItem('token') || '',
            }
        })
        return response.data;
    }catch(error){
        console.log(error);
        return error.response.data;
    }
}

export const UserService = {
    getUserInfo,
    createUser,
    createCredentials,
    getCredentials,
    updateCredentials
}