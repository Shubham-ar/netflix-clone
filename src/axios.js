import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

    //https://api.themoviedb.org/3/trending/all/week?api_key=135cafbdd3b91ff46a442c76847a0315&language=en-US

export default instance;
