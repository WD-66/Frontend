import './index.css';
import Student from './components/Student';
// You can work here or download the template
const studentData = {
	id: 1,
	firstName: 'Testy',
	lastName: 'McTest',
	age: 42,
	course: 'Web Development',
	city: 'Berlin',
	picture: 'https://randomuser.me/api/portraits/men/1.jpg'
};

// Your components go here

const App = () => {
	return (
		<div>
			<Student {...studentData} />
		</div>
	);
};

export default App;
