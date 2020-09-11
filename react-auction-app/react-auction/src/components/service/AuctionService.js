
import { apiGet, apiPost, apiPut, apiDelete } from '../../service/ApiService';

const apiUrl = 'http://localhost:8080/api/v1/';
const URL = 'auctions/';
const POST_URL='formPost';
const GET_URL='getAll';
const TOP_URL='getTop';
const DELETE_URL='deleteListing';

const apiGetAllAuctions = apiUrl + URL;
const apiPostCarListing = apiUrl + POST_URL;
const apiGetAllListings = apiUrl + GET_URL;
const apiGetTopListings = apiUrl + TOP_URL;
const apiDeleteListing = apiUrl + DELETE_URL;

export const getAllAuctions = () => {
    return apiGet(apiGetAllAuctions);
}

export const saveCarListing = (carListing) => {
    const params = {
        'carListing': carListing,
    }
    return apiPost(apiPostCarListing, params);
}

export const getAllCarListings = () => {
    return apiGet(apiGetAllListings);
}

export const getTopCarListings = () => {
    return apiGet(apiGetAllListings);
}

// export const deleteListing = (listing) => {
//     const params = {
//         'carListing' : listing,
//     }
//     return apiDelete(apiDeleteListing, params);
// }

export const deletePost = (postId) => {
    return apiDelete(`${apiDeleteListing}/${postId}`); 
}