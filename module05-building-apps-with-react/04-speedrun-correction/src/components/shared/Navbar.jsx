import { Link } from 'react-router';
const Navbar = () => {
	return (
		<div className='navbar bg-neutral shadow-sm'>
			<Link to='/' className='btn btn-ghost text-xl'>
				React Movie Database
			</Link>
		</div>
	);
};

export default Navbar;
