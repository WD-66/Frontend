// add a new object to cart every time
// const addToCart = product => {
//   const currCart = JSON.parse(localStorage.getItem('cart')) || [];
//   const updatedCart = [...currCart, product];

//   localStorage.setItem('cart', JSON.stringify(updatedCart));
// };

// check if item is in cart
const addToCart = product => {
  const currCart = JSON.parse(localStorage.getItem('cart')) || [];
  const isInCart = currCart.some(item => item.id === product.id);
  let updatedCart = [];

  // if the item is already in the cart
  if (isInCart) {
    // // update the count of that item
    updatedCart = currCart.map(item => (item.id === product.id ? { ...item, count: item.count + 1 } : item));
  } else {
    // else add a new object to the cart, with a count property of 1
    const newItem = { ...product, count: 1 };

    updatedCart = [...currCart, newItem];
  }

  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export { addToCart };
