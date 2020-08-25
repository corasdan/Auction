import Axios from "axios";



export const apiGet = (URL, params) => {
    return Axios.get(URL, {params: params})
};
export const apiPostWithoutCredentials = (URL, data) => {
    return Axios.post(URL, data);
};
export const apiPost = (URL, data) => {
    return Axios.post(URL, data);
};
export const apiDelete = (URL) => {
    return Axios.delete(URL);
};
export const apiPut = (URL, data) => {
    return Axios.put(URL, data);
};