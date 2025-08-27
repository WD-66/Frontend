import { useState, useEffect } from 'react';
import { getProducts } from '../data';
import { CatList, Card } from '../components';

const Home = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const abortController = new AbortController();
		(async () => {
			try {
				const allProds = await getProducts(abortController);
				setProducts(allProds);
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
		<div className='px-6'>
			<CatList />
			<section className='p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]  gap-6 justify-center'>
				{products.map(product => (
					<Card key={product.id} product={product} />
				))}
			</section>
		</div>
	);
};

export default Home;
