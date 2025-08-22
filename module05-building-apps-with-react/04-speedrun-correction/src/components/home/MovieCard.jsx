import { Link } from 'react-router';
import { IMG_URL } from '../../data';
const MovieCard = ({ original_title, poster_path, id }) => {
	return (
		<div className='card bg-base-100 image-full w-96 shadow-sm'>
			<figure>
				<img src={IMG_URL + poster_path} alt='Shoes' />
			</figure>
			<div className='card-body justify-center items-center'>
				<h2 className='card-title text-4xl'>{original_title}</h2>

				<div className='card-actions justify-end'>
					<Link to={`movie/${id}`}>
						<button className='btn btn-primary'>See Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
