import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to='/'>
        <h3>Goof-books</h3>
      </Link>
      <div>
        <NavLink to='/category/Literary'>Literary</NavLink>
        <NavLink to='/category/Fantasy'>Fantasy</NavLink>
        <NavLink to='/category/Classics'>Classics</NavLink>
        <NavLink to='/category/Romance'>Romance</NavLink>
        <NavLink to='/category/Youth'>Youth</NavLink>
        <NavLink to='/category/Mystery'>Mystery</NavLink>       
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
