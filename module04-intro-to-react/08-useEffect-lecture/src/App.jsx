import { useState, useEffect } from 'react';
import { getAllDucks } from './data';

import Navbar from './components/Navbar';
import Header from './components/Header';
import DuckPond from './components/DuckPond';
import DuckForm from './components/DuckForm';
import Footer from './components/Footer';

const sleep = ms => new Promise(res => setTimeout(res, ms));

function App() {
	const [ducks, setDucks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		console.log('useEffect ran');
		// const getAndSetDucks = async () => {
		// 	const duckData = await getAllDucks();
		// 	setDucks(duckData);
		// };
		// getAndSetDucks();
		const abortController = new AbortController();
		(async () => {
			setLoading(true);
			setError(null);
			// await sleep(2000);
			try {
				const duckData = await getAllDucks(abortController);
				setDucks(duckData);
			} catch (error) {
				if (error.name === 'AbortError') {
					console.info('Fetch Aborted');
				} else {
					console.error(error);
					setError('Error bringing ducks to the pond.');
				}
			} finally {
				setLoading(false);
			}
		})();

		return () => {
			abortController.abort();
		};
	}, []);
	return (
		<div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
			<Navbar />
			<main className='flex-grow flex flex-col'>
				<Header />
				<DuckPond error={error} loading={loading} ducks={ducks} />
				<DuckForm setDucks={setDucks} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
