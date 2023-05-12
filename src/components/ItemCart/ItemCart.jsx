import { useEffect } from "react";
import { useCarritoContext } from "../../context/CartContext";
import { useCount } from "../../hooks/useCount";

export const ItemCart = ( { item } ) => {
	const { removeItem, updateQuantityItem } = useCarritoContext();
	const { count, minus, sum } = useCount( item.quantity, 1, item.stock );

	useEffect( () => {
		updateQuantityItem( item.id, count );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ item.id, count ]);

	return (
		<div className="card mb-3">
			<div className="row g-0">
				<div className="col-md-4">
					<img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} width={ 150 }/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{ item.nombre } { item.modelo }</h5>
						<div className="d-flex flex-row align-items-center">
							<p className="card-text m-0 pr-3">Cantidad: { count }</p>
							<div>
								<button className="btn btn-dark mx-1" onClick={ () => minus() }>-</button>
								<button className="btn btn-dark mx-1" onClick={ () => sum() }>+</button>
							</div>
						</div>
						<p className="card-text">Precio Unitario: S/{item.precio}</p>
						<p className="card-text">Subtotal: S/{item.precio * item.quantity}</p>
						<button className="btn btn-danger" onClick={ () => removeItem( item.id ) }><i className="fas fa-trash-alt"></i></button>
					</div>
				</div>
			</div>
		</div>
	)
}
