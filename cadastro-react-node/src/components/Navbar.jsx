import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/users'>Usuários cadastrados</NavLink>
      <NavLink to='/contact'>Contato</NavLink>
    </nav>
  );
};

export default Navbar;
