import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { SharedLayout } from './index';
import { Route, Routes } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense>
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
      </Suspense>

      <ToastContainer />
    </>
  );
};
