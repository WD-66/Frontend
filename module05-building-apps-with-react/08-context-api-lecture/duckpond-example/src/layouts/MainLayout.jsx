import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Navbar, Footer } from '../components';
import { DuckProvider } from '../context';

const MainLayout = () => {
	return (
		<DuckProvider>
			<div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
				<Navbar />
				<main className='flex-grow flex flex-col'>
					<Outlet />
				</main>
				<Footer />
				<ToastContainer position='bottom-right' />
			</div>
		</DuckProvider>
	);
};

export default MainLayout;
