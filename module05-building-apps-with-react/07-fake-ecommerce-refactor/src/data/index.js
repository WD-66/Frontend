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

const getProductsByCategory = async (category, abortCont) => {
	const res = await fetch(
		`https://fakestoreapi.com/products/category/${category}`
	);
	if (!res.ok)
		throw new Error(`${res.status}. Something went wrong!`, {
			signal: abortCont.signal
		});

	const data = await res.json();

	const fixedImg = data.map(item => ({
		...item,
		image: item.image.replace('.jpg', 't.png')
	}));

	return fixedImg;
};

export { getProducts, getCategories, getProductsByCategory };
