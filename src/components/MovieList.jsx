import {useEffect,useState} from 'react'
import Cards from './Card';
import { useParams } from 'react-router-dom';
import  fetchData from '../services/axios.services';
import '../App.css';

export default function MovieList() {
  const [movieList, setMovieList ] = useState({})
  const {type} = useParams();

  useEffect(() => {
    fetchData(`${type ? type :"popular"}?api_key=8c129cc132865b5fefc0bc77f8dacff7`).then((data)=>{
        //console.log(data.data.results);
        setMovieList(data.data.results);

    })
  },[type]);
  console.log(movieList);
  return (
    <div className="movie__list">
        <h2 className="list__title">{(type? type : "Popular").toUpperCase()}</h2>
        <div className="list__cards">
            {   movieList !== undefined && movieList.length > 0 &&
                movieList.map((movie) => {
                    return <Cards key = {movie.id} movie = {movie} />
                })
            }
        </div>
    </div>
  )
}
