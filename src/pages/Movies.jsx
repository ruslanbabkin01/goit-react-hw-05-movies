import { Searchbar } from 'components';
import { Outlet } from 'react-router-dom';
import { fetchSearchMovies } from '../api/themoviedbAPI';
import { VideoGallery } from 'components';

export default function Movies() {
  return (
    <main>
      <Searchbar />

      <VideoGallery />
      <Outlet />
    </main>
  );
}
