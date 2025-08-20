import { useState } from 'react';

const Navbar = () => {
	// let isSignedIn = false;
	const [isSignedIn, setSignedIn] = useState(false);

	const handleClick = () => {
		setSignedIn(prev => !prev);
	};

	return (
		<div className='navbar bg-slate-800'>
			<div className='navbar-start'>
				<a className='font-bold' href='#'>
					The Duck Pond
				</a>
			</div>
			<nav className='navbar-end'>
				<ul className='menu menu-horizontal items-baseline gap-2'>
					<li>
						<a href='index.html'>Home</a>
					</li>
					<li>
						<a href='src/myPond.html'>My Pond</a>
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
