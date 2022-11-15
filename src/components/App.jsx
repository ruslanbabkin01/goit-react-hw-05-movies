import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './index';
import {
  Home,
  Movies,
  Cast,
  NotFound,
  MovieDetails,
  Reviews,
} from '../pages/index';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};
