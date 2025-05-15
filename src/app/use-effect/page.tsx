"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
      const tvList = response.data.results.filter(
        (item: any) => item.media_type === "movie"
      );
      setMovieList(tvList);
    })
      .catch(() => {
        alert("เกิดข้อผิดผลาดในการดึงข้อมูล");
      });
  }, []);

  return (
    <div>
      <MenuBar page={"เรียนรู้ Use-Effect"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movieList.map(function (movie, index) {
        return (
        <MovieCard 
            key={index}
            title={movie.title}
            name={movie.name}
            description={movie.overview}
            image={movie.poster_path}
        />
        );
      })}
      </div>
      <Footer />
    </div>
  );
}
