import axios from "axios";
const key = 'f577ae42231b4750b0f451ce0a4729ff';
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})
const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId =(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getGenreList,getAllGames,getGameListByGenreId
}