import { Outlet } from 'react-router-dom';
import { StyledLink } from './SharedLayout.styled';
import { Box } from '../../styles/Box';

export const SharedLayout = () => {
  return (
    <Box display="flex">
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </Box>
  );
};
