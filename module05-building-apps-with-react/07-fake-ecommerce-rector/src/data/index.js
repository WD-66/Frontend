const getProducts = async abortCont => {
	const res = await fetch('https://fakestoreapi.com/products', {
		signal: abortCont.signal
	});
	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

	const data = await res.json();

	return data;
};

const getCategories = async abortCont => {
	const res = await fetch('https://fakestoreapi.com/products/categories', {
		signal: abortCont.signal
	});
	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

	const data = await res.json();

	return data;
};

export { getProducts, getCategories };
