const formatPrice = price =>
	new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
		price
	);
const checkInCart = (cart, product) =>
	cart.find(item => item.id === product.id);

const addToCart = (cart, product) => {
	const isInCart = checkInCart(cart, product);
	let updatedCart = [];

	// if the item is already in the cart
	if (isInCart) {
		// // update the count of that item
		updatedCart = cart.map(item =>
			item.id === product.id ? { ...item, count: item.count + 1 } : item
		);
	} else {
		// else add a new object to the cart, with a count property of 1
		const newItem = { ...product, count: 1 };

		updatedCart = [...cart, newItem];
	}

	localStorage.setItem('cart', JSON.stringify(updatedCart));
	return updatedCart;
};

const removeFromCart = (cart, product) => {
	const prodInCart = checkInCart(cart, product);
	let updatedCart = [];

	// if the item count is at one
	if (prodInCart.count === 1) {
		// // remove the item from the array
		updatedCart = cart.filter(item => item.id !== product.id);
	} else {
		// else decrease count property by 1
		updatedCart = cart.map(item =>
			item.id === product.id ? { ...item, count: item.count - 1 } : item
		);
	}

	localStorage.setItem('cart', JSON.stringify(updatedCart));
	return updatedCart;
};

export { formatPrice, addToCart, checkInCart, removeFromCart };
