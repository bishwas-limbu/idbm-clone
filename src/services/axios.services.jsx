import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie/";

const fetchData = async (url) =>{
    const response = await axios.get(API_URL + url);
    return response;
};
export default fetchData;