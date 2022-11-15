import { Link } from 'react-router-dom';

export const Home = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
  </nav>
);
