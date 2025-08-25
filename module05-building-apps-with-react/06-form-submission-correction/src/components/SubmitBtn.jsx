import { useFormStatus } from 'react-dom';

const SubmitBtn = ({ children }) => {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending} className='btn btn-neutral mt-4'>
			{pending ? (
				<>
					<span className='loading loading-spinner'></span>
					{children + 'ing'}
				</>
			) : (
				children
			)}
		</button>
	);
};

export default SubmitBtn;
