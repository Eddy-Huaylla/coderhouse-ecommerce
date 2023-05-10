import { BrowserRouter } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Routes } from './Routes';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// import { createProducts } from './services/firebase.js';

function App() {
	// createProducts();

	return (
		<BrowserRouter>
			<ToastContainer />
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
