import { BrowserRouter } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Routes } from './Routes';

// import { createProducts } from './services/firebase.js';

function App() {
	// createProducts();

	return (
		<BrowserRouter>
			<header>
				<NavBar />
			</header>
			<section>
				<Routes />
			</section>
		</BrowserRouter>
	);
}

export default App;
