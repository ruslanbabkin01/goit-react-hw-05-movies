import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAboutMovie } from '../api/themoviedbAPI';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const movie = getProductById(id);

  useEffect(() => {
    const response = fetchAboutMovie(movieId);
    // console.log(response);
  }, [movieId]);

  // if (!movie) return;

  return (
    <main>
      <div>
        <p>{movie.original_title}</p>
      </div>
    </main>
  );
}
