import React, { useEffect, useState } from "react";
import axios from "axios";
import Singlecontnet from "../component/Singlecontnet";
import Custompagination from "../component/Custompagination";

const Trending = () => {
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchtrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
      setNumOfPages(data.total_pages)
    setcontent(data.results);
  };
  useEffect(() => {
    fetchtrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="app">
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
        Trending
      </span>
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
      <Custompagination setpage={setpage} numOfPages={numOfPages}/>
    </div>
  );
};

export default Trending;
