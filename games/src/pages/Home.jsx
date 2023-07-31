import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenreId from '../components/GamesByGenreId';

function Home() {
  const [allGameList,setAllGameList] = useState();
  const [gameListByGenres,setGameListByGenres] = useState([]);
  const [selectedGenresName,setSelectedGenresName] = useState('Action')
  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4);
  },[])
  const getAllGamesList = ()=>{
    GlobalApi.getAllGames.then((resp)=>{
      // console.log(resp.data.results)
      setAllGameList(resp.data.results)
    })
  }
  const getGameListByGenresId=(id)=>{
    console.log("genre id",id);
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      // console.log(resp.data.results);
      setGameListByGenres(resp.data.results);
    })
  }
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='hidden md:block'>
      <GenreList genreId={(genreId)=>getGameListByGenresId(genreId)}
        selectedGenresName={(name)=>setSelectedGenresName(name)}
      />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList?.length>0&&gameListByGenres.length>0?
        <div>
          <Banner gameBanner={allGameList[0]}/>
          <TrendingGames gameList={allGameList}/>
          <GamesByGenreId gameList={gameListByGenres}
            selectedGenresName={selectedGenresName}
          />
        </div>       
        :null}
      </div> 
    </div>
  )
}

export default Home
