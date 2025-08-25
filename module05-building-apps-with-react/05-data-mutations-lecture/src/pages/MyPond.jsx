import { useState } from 'react';

import { DuckPond, MyDuckForm } from '../components';
// import DuckPond from '../components/DuckPond';
// import DuckForm from '../components/shared/DuckForm';

const MyPond = () => {
	const [myDucks, setMyDucks] = useState(
		JSON.parse(localStorage.getItem('myDucks')) || []
	);

	return (
		<>
			<DuckPond ducks={myDucks} />
			<MyDuckForm setDucks={setMyDucks} />
		</>
	);
};

export default MyPond;
