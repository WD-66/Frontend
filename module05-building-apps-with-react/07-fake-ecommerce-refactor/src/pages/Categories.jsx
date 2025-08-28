import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card } from '../components';
import { getProductsByCategory } from '../data';
const Categories = () => {
	const { category } = useParams();
	const [prodsInCat, setProdsInCat] = useState([]);

	useEffect(() => {
		const abortController = new AbortController();
		(async () => {
			try {
				const prods = await getProductsByCategory(category, abortController);

				setProdsInCat(prods);
			} catch (error) {
				if (error.name !== 'AbortError') {
					console.error(error);
				}
			}
		})();
		return () => {
			abortController.abort();
		};
	}, [category]);
	return (
		<div className='px-6'>
			<h2 className='text-5xl'>Products in {category}</h2>
			<section className='p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]  gap-6 justify-center'>
				{prodsInCat.map(prod => (
					<Card key={prod.id} product={prod} />
				))}
			</section>
		</div>
	);
};

export default Categories;
