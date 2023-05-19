import axios from "axios";
import React, { useEffect, useState } from "react";
import Cipe from "../component/Cipe";
import Custompagination from "../component/Custompagination";
import useGenre from "../component/hookgenres";
import Singlecontnet from "../component/Singlecontnet";

const Movie = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const [num, setsum] = useState();
  const genreforURL = useGenre(selectedGenres);
  const fetchtrending = async () => {
    const { data } = await axios.get(
      `
      https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`
    );
 
    setcontent(data.results);
    setsum(data.total_pages)
  };
  
  useEffect(() => {
    fetchtrending();
    // eslint-disable-next-line
  }, [page,genreforURL]);

  return     <div className="app">
  <span
    style={{
      display: "flex",
      justifyContent: "center",
      fontSize: "2vw",
      color: "white",
      padding: "4px",
    }}
    className="pagetitle"
  >
   Movie
  </span>
 

 <Cipe
 
  type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setpage={setpage}/>
  <div
    style={{
      flexWrap: "wrap",
      display: "flex",
      gap: "10px",
      margin: "0 50px",
    }}
  >
    {content &&
      content.map((c) => (
        <Singlecontnet
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
        />
      ))}
  </div>
  <Custompagination setpage={setpage} num={num} />
</div>;
};

export default Movie;
