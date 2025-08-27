import { Link, useOutletContext } from 'react-router';
import { formatPrice } from '../../utils';
import CartBtns from './CartBtns';

const Card = ({ product }) => {
	const { cart, setCart } = useOutletContext();
	const { title, price, category, image } = product;
	const formattedPrice = formatPrice(price);

	return (
		<div className='card bg-base-100 w-96 shadow-sm'>
			<figure className='bg-white h-48 p-3'>
				<img className='object-contain h-full w-full' src={image} alt={title} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{formattedPrice}</p>
				<div className='card-actions justify-end'>
					<Link
						className='underline hover:text-purple-500'
						to={`categories/${category}`}
					>
						see more in {category}
					</Link>
					<CartBtns product={product} />
				</div>
			</div>
		</div>
	);
};

export default Card;
