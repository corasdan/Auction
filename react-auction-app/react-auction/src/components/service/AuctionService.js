
import { apiGet, apiPost, apiPut } from '../../service/ApiService';

const apiUrl = 'http://localhost:8080/api/v1/';
const URL = 'auctions/';

const apiGetAllAuctions = apiUrl + URL;

export const getAllAuctions = () => {
    return apiGet(apiGetAllAuctions);
}
