import axios from "axios";

export const getMovieData = async (name) => {
    // const key = "99d929d9";
    const res = await axios.get(`http://www.omdbapi.com/?apikey=99d929d9&s=${name}`);
    console.log(res.data.Search);
    return res.data.Search;
}

