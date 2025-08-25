import { useState, useEffect } from 'react';
import { getAllDucks } from '../data';
import {
	Header,
	DuckPond,
	DuckForm,
	Actions,
	UseActionState
} from '../components';

// import Header from '../components/home/Header';
// import DuckPond from '../components/DuckPond';
// import DuckForm from '../components/shared/DuckForm';

const sleep = ms => new Promise(res => setTimeout(res, ms));

const Home = () => {
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
		<>
			<Header />
			<DuckPond error={error} loading={loading} ducks={ducks} />
			{/* <DuckForm setDucks={setDucks} /> */}
			{/* <Actions setDucks={setDucks} /> */}
			<UseActionState setDucks={setDucks} />
		</>
	);
};

export default Home;
