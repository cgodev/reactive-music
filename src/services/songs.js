// Packages
import axios from "axios";

// Config
import { config } from "../config/index";

async function getSongs(){
    try {
        const { data } = await axios({
            url: config().baseUrl,
            method: "GET"
        });

    } catch (error) {
        
    }
}

export default {
    getSongs
}