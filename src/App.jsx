import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { CarritoProvider } from './context/CartContext';

import { Routes } from './Routes';

import { NavBar } from './components/NavBar/NavBar';

import 'react-toastify/dist/ReactToastify.css';

// import { createProducts } from './services/firebase.js';

function App() {
	// createProducts();

	return (
		<CarritoProvider>
			<BrowserRouter>
				<ToastContainer />
				<header>
					<NavBar />
				</header>
				<section>
					<Routes />
				</section>
			</BrowserRouter>
		</CarritoProvider>
	);
}

export default App;
