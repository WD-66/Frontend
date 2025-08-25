import { useActionState, use, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Instructions, SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';

const productsPromise = searchProducts();

const searchAction = async (prevState, formData) => {
	const category = formData.get('category');
	const minPrice = +formData.get('minPrice') || undefined;
	const maxPrice = +formData.get('maxPrice') || undefined;
	const query = formData.get('query');

	const result = await searchProducts({ category, minPrice, maxPrice, query });
	console.log(result);

	return result;
};

const Search = () => {
	const [state, formAction, isPending] = useActionState(
		searchAction,
		use(productsPromise)
	);

	useEffect(() => {
		if (state.error) {
			toast.error(state.error);
		}
	}, [state]);
	return (
		<div className='flex flex-col items-center'>
			<SearchForm formAction={formAction} isPending={isPending} />
			<SearchResults products={state.products} />
			<Instructions path='/search.md' />
		</div>
	);
};

export default Search;
