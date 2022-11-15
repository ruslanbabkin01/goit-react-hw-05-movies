import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
