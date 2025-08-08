import { getProducts } from './modules/network.js';
import { renderProductCard } from './modules/ui.js';
const prodContainer = document.querySelector('#products-container');

const renderProducts = async () => {
  try {
    const allProducts = await getProducts();
    // console.log(allProducts);

    allProducts.forEach(product => {
      renderProductCard(product, prodContainer);
    });
  } catch (error) {
    console.error(error);
  }
};

renderProducts();
