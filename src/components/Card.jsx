import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const Cards = ({movie}) => {
    console.log(movie);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },1500);
    },[]);

    return (
        <>
            { isLoading ?
                <div className="cards">
                    <SkeletonTheme color = "#202020" highlight = "#444">
                        <Skeleton height = {300} duration = {2} />
                    </SkeletonTheme>
                </div>
                :
                <Link to = {`/movie/${movie.id}`} style = {{ textDecoration: "none",color: "white" }}>
                    <div className="cards">
                        {/* <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt={movie.title} /> */}
                        {/* <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} /> */}
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="cards__img" />
                        <div className="cards__overlay">
                            <div className="cards__title ">{movie.original_title.length > 38 ? movie.original_title.slice(0,38) + (".."):movie.original_title  }</div>
                                <div className="cards__runtime ">
                                    {movie.release_date}
                                    <span className='cards__rating '>
                                        {movie.vote_average}
                                        <i  className='fas fa-star'/>
                                    </span>                
                                </div>
                                <div className="cards__description ">{movie.overview.slice(0,118)+"..." }</div> 
                        </div>
                    </div>
                </Link>
            }
        </>
    );
};
export default Cards;