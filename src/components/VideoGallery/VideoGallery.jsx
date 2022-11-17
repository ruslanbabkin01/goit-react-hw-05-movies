import PropTypes from 'prop-types';
import {
  ImageList,
  MovieItem,
  MovieImg,
  LinkMovie,
  Title,
} from './VideoGallery.styled';

export const VideoGallery = ({ movies }) => (
  <ImageList>
    {movies.map(({ id, title, poster_path, original_name, original_title }) => (
      <MovieItem key={id}>
        <LinkMovie to={`/movies/${id}`}>
          <MovieImg
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
          />
        </LinkMovie>
        <Title>{original_name ?? original_title}</Title>
      </MovieItem>
    ))}
  </ImageList>
);

VideoGallery.prototype = {
  movies: PropTypes.array.isRequired,
};
