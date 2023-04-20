import { BrowserRouter } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Routes } from './Routes';

function App() {
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
