import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 80px) / 4);
  margin: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const LinkMovie = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-top: 12px;
  text-align: center;
`;
