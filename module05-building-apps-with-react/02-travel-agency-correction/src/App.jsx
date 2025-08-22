import { BrowserRouter, Routes, Route } from 'react-router';

import { RootLayout } from './layouts';
import { About, Contact, Destinations, Home, SingleDest } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					<Route path='destinations' element={<Destinations />} />
					<Route path='destinations/:slug' element={<SingleDest />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
