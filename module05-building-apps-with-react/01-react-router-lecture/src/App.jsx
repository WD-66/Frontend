import { BrowserRouter, Routes, Route } from 'react-router';

import { MainLayout } from './layouts';
import { Home, MyPond, DuckPage } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='mypond' element={<MyPond />} />
					<Route path='ducks/:id' element={<DuckPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
