import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { NavBar } from './NavBar/NavBar';

function App() {
  return (
	<>
		<header>
			<NavBar />
		</header>
		<section>
			<ItemListContainer greeting="Hola, Lista de contenidos..." />
		</section>
	</>
  );
}

export default App;
