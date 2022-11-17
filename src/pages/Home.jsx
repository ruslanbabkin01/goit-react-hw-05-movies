import { VideoGallery } from '../components/VideoGallery/VideoGallery';
import { fetchTrendMovies } from '../api/themoviedbAPI';
import { useState, useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendMovies();
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {movies && <VideoGallery movies={movies}></VideoGallery>}
    </main>
  );
}
