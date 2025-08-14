import { useState } from 'react';

const App = () => {
	const [form, setForm] = useState({ name: '', email: '', tel: '', message: '' });
	const handleChange = e => {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		try {
			if (!form.name.trim()) throw new Error('Name is required');
			if (!form.email.trim()) throw new Error('Email is required');
			if (!form.tel.trim()) throw new Error('Telephone is required');
			if (!form.message.trim()) throw new Error('Message is required');
			console.log(form);

			setForm({ name: '', email: '', tel: '', message: '' });
		} catch (error) {
			alert(error.message || 'Something went wrong');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '25%' }}>
				<label>
					<span>Name: </span>
					<input onChange={handleChange} value={form.name} name='name' type='text' />
				</label>
				<label>
					<span>Email: </span>
					<input onChange={handleChange} value={form.email} name='email' type='email' />
				</label>
				<label>
					<span>Telephone: </span>
					<input onChange={handleChange} value={form.tel} name='tel' type='tel' />
				</label>
				<label>
					<span>Message: </span>
					<textarea onChange={handleChange} value={form.message} name='message'></textarea>
				</label>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default App;
