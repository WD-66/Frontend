import { useState } from 'react';
import './index.css';
import LightBulb from './components/LightBulb';
const App = () => {
	const [isOn, setIsOn] = useState(false);
	const [count, setCount] = useState(0);
	const maxTurns = 10;
	const toggleLight = () => {
		// if the light was off, increase count by 1
		if (!isOn) {
			if (count >= maxTurns) {
				alert('Save some energy! Lights off for now');
				return;
			}
			setCount(chickenButt => chickenButt + 1);
		}
		setIsOn(prev => !prev);
	};

	const handleReset = () => {
		setIsOn(false);
		setCount(0);
	};
	return (
		<>
			<button onClick={toggleLight}>{isOn ? 'Turn off' : 'Turn on'}</button>
			<button onClick={handleReset}>Reset</button>
			<LightBulb isOn={isOn} />
		</>
	);
};

export default App;
