import '../App.css'
import {useState,useEffect} from 'react';
import fetchData from '../services/axios.services';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';


const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        fetchData('popular?api_key=8c129cc132865b5fefc0bc77f8dacff7').then((data)=>{
            //console.log(data.data.results);
            setPopularMovies(data.data.results);
        })
    },[]);
    //console.log(popularMovies);
    return(
        <>
            <div className='poster'>
                <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        transitionTime={3}
                        infiniteLoop={true}
                        showStatus={false}
                >
                    {
                        popularMovies !== undefined && popularMovies.length > 0 &&
                            popularMovies.map((movie) => {
                                return (
                                    <Link  key ={movie.id} to = {`/movie/${movie.id}`} style = {{textDecoration: "none", color: "white"}}>
                                        <div className='posterImage'>
                                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt = {movie.original_title} />   
                                        </div>
                                        <div className="posterImage__overlay">
                                            <div className="posterImage__title ">{movie.original_title.length > 38 ? movie.original_title.slice(0,38) + (".."):movie.original_title  }</div>
                                            <div className="posterImage__runtime ">
                                                {movie.release_date}
                                                <span className='posterImage__rating '>
                                                    {movie.vote_average}
                                                    <i  className='fas fa-star'/>
                                                </span>  
                                            </div>
                                            <div className="posterImage__description ">{movie.overview}</div>
                                        </div>
                                    </Link>
                                );
                            })
                    }
                </Carousel>
                <MovieList />
 
            </div>

        </>
    );
};
export default  Home;