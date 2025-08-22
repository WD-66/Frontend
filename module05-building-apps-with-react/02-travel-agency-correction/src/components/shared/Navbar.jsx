import { Link, NavLink } from 'react-router';

const Navbar = () => {
	const showActive = ({ isActive }) => (isActive ? 'menu-active' : '');
	return (
		<div className='navbar bg-base-200 shadow-sm'>
			<div className='flex-1'>
				<Link to='/' className='btn btn-ghost text-xl'>
					Travel
				</Link>
			</div>
			<div className='navbar-end'>
				<ul className='menu menu-horizontal items-baseline gap-2'>
					<li>
						<NavLink className={showActive} to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={showActive} to='/about'>
							About
						</NavLink>
					</li>
					<li>
						<NavLink className={showActive} to='/destinations'>
							Destinations
						</NavLink>
					</li>
					<li>
						<NavLink className={showActive} to='/contact'>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
