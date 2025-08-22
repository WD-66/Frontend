import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSingleMovie, IMG_URL } from '../data';

const Details = () => {
	const [currMovie, setCurrMovie] = useState({});
	const { id } = useParams();
	const { original_title, poster_path, tagline, overview, genres } = currMovie;

	useEffect(() => {
		const abortController = new AbortController();

		(async () => {
			try {
				const movie = await getSingleMovie(id, abortController);
				console.log(movie);
				setCurrMovie(movie);
			} catch (error) {
				if (error.name !== 'AbortError') {
					console.error(error);
				}
			}
		})();
	}, []);

	if (!currMovie) return <div>Sorry, no movie found</div>;
	return (
		<div>
			<div className='hero bg-base-200 min-h-[50vh]'>
				<div className='hero-content flex-col lg:flex-row'>
					<img
						src={IMG_URL + poster_path}
						className='max-w-sm rounded-lg shadow-2xl'
					/>
					<div>
						<h1 className='text-5xl font-bold mb-2'>{original_title}</h1>
						<h2 className='text-3xl indent-4 mb-4'>{tagline}</h2>
						<p className='mb-6'>{overview}</p>
						<div>
							<h3 className='font-bold'>Genres: </h3>
							<ul className='list-disc ml-8'>
								{genres?.map(genre => (
									<li key={genre.id}>{genre.name}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
