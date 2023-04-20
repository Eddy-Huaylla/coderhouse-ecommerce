import { Link } from 'react-router-dom';
import './styles.scss';

const Item = ( { item } ) => {
    return (
		<div className='item'>
			<div className="card">
				<img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
				<div className="card-body">
					<h5 className="card-title">{item.nombre} {item.modelo}</h5>
					<div className='card-list-text'>
						<p className="card-text">Marca: {item.marca}</p>
						<p className="card-text">Precio: ${item.precio}</p>
						<p className="card-text">Stock: {item.stock}</p>
						<Link className='nav-link btn btn-dark' to={`/product/${item.id}`}>Ver Producto</Link>
					</div>
				</div>
			</div>
		</div>


    )
}

export { Item }
