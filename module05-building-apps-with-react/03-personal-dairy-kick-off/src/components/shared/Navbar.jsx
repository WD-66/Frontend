import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';

const Navbar = () => {
	// let isSignedIn = false;
	const [isSignedIn, setSignedIn] = useState(false);

	const navigate = useNavigate();
	const handleClick = () => {
		setSignedIn(prev => !prev);
		setTimeout(() => navigate('/mypond'), 500);
	};

	const showActive = ({ isActive }) => (isActive ? 'menu-active' : '');
	return (
		<div className='navbar bg-slate-800'>
			<div className='navbar-start'>
				<Link className='font-bold' to='/'>
					The Duck Pond
				</Link>
			</div>
			<nav className='navbar-end'>
				<ul className='menu menu-horizontal items-baseline gap-2'>
					<li>
						<NavLink className={showActive} to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={showActive} to='/myPond'>
							My Pond
						</NavLink>
					</li>
					<li>
						{isSignedIn ? (
							<button className='btn btn-primary' onClick={handleClick}>
								Sign Out
							</button>
						) : (
							<button className='btn btn-primary' onClick={handleClick}>
								Sign In
							</button>
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
