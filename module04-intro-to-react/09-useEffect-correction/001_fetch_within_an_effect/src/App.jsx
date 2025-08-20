import { useState, useEffect } from 'react';
import './index.css';

import { getPeople } from './data';

// You can work here or download the template
// Your components go here

const App = () => {
	const [people, setPeople] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);
	const [prevUrl, setPrevUrl] = useState(null);
	const [url, setUrl] = useState('https://swapi.tech/api/people');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log('useEffect ran');
		const abortController = new AbortController();

		const getAndSetPeople = async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await getPeople(url, abortController);
				console.log(data);
				setPeople(data.results);
				setNextUrl(data.next);
				setPrevUrl(data.previous);
			} catch (error) {
				if (error.name !== 'AbortError') {
					console.error(error);
					setError('Failed to load Star Wars people');
				}
			} finally {
				setLoading(false);
			}
		};

		getAndSetPeople();

		return () => {
			abortController.abort();
		};
	}, [url]);

	const handleNext = () => setUrl(nextUrl);

	const handlePrev = () => setUrl(prevUrl);
	return (
		<main className='min-h-screen bg-gray-100 p-8 font-sans'>
			<div className='max-w-3xl mx-auto space-y-6'>
				<div className='flex justify-center gap-4 pt-6'>
					<button
						onClick={handlePrev}
						disabled={!prevUrl}
						className={`px-4 py-2 rounded ${
							!prevUrl ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
						}`}
					>
						Previous
					</button>
					<button
						onClick={handleNext}
						disabled={!nextUrl}
						className={`px-4 py-2 rounded ${
							!nextUrl ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
						}`}
					>
						Next
					</button>
				</div>
				<h1 className='text-3xl font-bold text-center text-gray-800'>Star Wars Characters</h1>

				{loading && <p className='text-center text-gray-600 font-medium'>Loading...</p>}

				{error && <p className='text-center text-red-500 font-semibold'>{error}</p>}

				<ul className='grid sm:grid-cols-2 gap-4'>
					{!loading &&
						!error &&
						people.map(person => (
							<li key={person.uid} className='bg-white p-4 rounded shadow text-center capitalize'>
								<span className='font-semibold text-gray-800'>{person.name}</span>
							</li>
						))}
				</ul>
			</div>
		</main>
	);
};

export default App;
