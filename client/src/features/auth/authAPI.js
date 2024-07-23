import axios from "axios";
import { loginRoute } from "../../utils/APIRoutes";

export function loginUserAPI (userData){
    return new Promise(async(resolve, reject) => {
        const result = await axios.post(loginRoute,userData);
        resolve(result);
    })
}

export function signOutAPI() {
    return new Promise((resolve, reject) => {
        try {
            resolve("SignOut Successfully.")
        } catch (error) {
            reject(error);
        }
    })
}