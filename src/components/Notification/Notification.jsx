import PropTypes from 'prop-types';
import { Container } from './Notification.styled';

export const Notification = ({ message, status }) => (
  <Container>
    {status === 'idle' && <span>search movies</span>}
    {status === 'empty' && <p>{message}</p>}
    {status === 'error' && <p>{message}</p>}
  </Container>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
