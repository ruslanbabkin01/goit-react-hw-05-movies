import { RiMovie2Line, RiHome4Fill } from 'react-icons/ri';
import { NavItem } from './AppBar.styled';
import { Box } from '../../styles/Box';

const navItems = [
  { href: 'home', text: 'Home', icon: RiHome4Fill },
  { href: 'movies', text: 'Movies', icon: RiMovie2Line },
];

export const AppBar = () => {
  return (
    <Box as="header" p={4} height="100vh" borderBottom="1px solid black">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="16" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
