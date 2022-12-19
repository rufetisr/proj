import axios from "axios";

export const getMovieData = async (name) => {
    const key = "492f6f72";
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${name}`);
    console.log(res.data.Search);
    return res.data.Search;
}

