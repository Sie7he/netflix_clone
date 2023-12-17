import axios from "axios";
import { useState, useEffect } from "react"
import endpoints from "../services/movieServices";

const Hero = () => {

const [movie, setMovie] = useState({});

useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random()* movies.length)]
        setMovie(randomMovie)
    })

},[])

const { title, backdrop_path, overview } = movie; 
  return (
    !movie ? <p>Cargando Películas</p> : 
    (
    <div className="w-full h-[550px] lg:h-[850px]"> 
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" /> 
            <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} 
                alt={title}
                className="w-full h-full object-cover object-top"
            />
         <div className="absolute w-1/2 top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-7xl font-nsans-bold text-wrap-balance">{title}</h1>
         
         <p className="w-full md:max-w-[70%] lg:max-w-1/2 text-gray-200 text-[1.2vw] mt-4 overflow-hidden text-ellipsis ">{overview}</p>
         <div className="mt-8 mb-4">
         <button className="border bg-gray-300 text-black py-2 px-5 font-nsans-bold rounded hover:bg-gray-400">
            Reproducir
          </button>
          <button className="border py-2 px-5 ml-4 font-nsans-bold rounded bg-gray-700 hover:bg-transparent">
            Ver Después
          </button>
         </div>
         </div>
      </div>
    </div>
    )
  )
}

export default Hero