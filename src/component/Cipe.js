import { Chip } from "@mui/material";

import axios from "axios";
import React, { useEffect } from "react";

const Cipe = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setpage,
}) => {
  const fetchtrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=441afe5ab2799e84cb9b09a08aae0819&language=en-US`
    );
    setGenres(data.genres);
  };
 
  useEffect(() => {
    fetchtrending();
  // eslint-disable-next-line
  }, []);
  const handeladd=(genre)=>{
    setSelectedGenres([genre,...selectedGenres]);
    setGenres(genres.filter((e)=>e.id !== genre.id))
  }
  const handelremove=(selectedGenre)=>{
    setGenres([...genres,selectedGenre]);
    setSelectedGenres(selectedGenres.filter((s)=>s.id !== selectedGenre.id))
  }
  return (
    <div>
      {selectedGenres &&
        selectedGenres.map((g) => (
          <Chip
            style={{ backgroundColor: "blue", margin: "5px 3px" }}
            label={g.name}
            key={g.id}
            clickable
            onDelete={()=>handelremove(g)}
          />
        ))}
      {genres &&
        genres.map((g) => (
          <Chip
            style={{ backgroundColor: "#fff", margin: "5px 3px" }}
            label={g.name}
            key={g.id}
            clickable
            onClick={()=>handeladd(g)}
          />
        ))}
    </div>
  );
};

export default Cipe;
