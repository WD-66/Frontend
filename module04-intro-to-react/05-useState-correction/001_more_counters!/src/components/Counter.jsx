const Counter = ({ state, setter }) => {
	const handleDecrease = () => {
		setter(prev => prev - 1);
	};

	const handleIncrease = () => {
		setter(prev => prev + 1);
	};
	return (
		<div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
			<h2>Counter</h2>
			<button onClick={handleDecrease}>-</button>
			<p>{state}</p>
			<button onClick={handleIncrease}>+</button>
		</div>
	);
};

export default Counter;
