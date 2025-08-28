import { useState, useEffect } from 'react';
import { getCategories } from '../../data';
import { Link } from 'react-router';

const CatList = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const abortController = new AbortController();
		(async () => {
			try {
				const allCats = await getCategories(abortController);
				setCats(allCats);
			} catch (error) {
				if (error.name === 'AbortError') {
				} else {
					console.error(error);
				}
			}
		})();

		return () => {
			abortController.abort();
		};
	}, []);
	return (
		<div className='flex flex-wrap gap-4'>
			{cats.map(cat => (
				<Link to={`/categories/${cat}`} key={cat}>
					<button className='btn btn-primary'>{cat}</button>
				</Link>
			))}
		</div>
	);
};

export default CatList;
