import { Link } from "react-router-dom";

import { useCarritoContext } from "../../context/CartContext";

import { ItemListCartContainer } from "../../components/ItemListCartContainer/ItemListCartContainer";

import './styles.scss';

export const Cart = () => {

    const { carrito } = useCarritoContext();

    return (
        <div className="page-cart w-100">
            {
                carrito.length === 0
				? (
					<div className="d-flex gap-5 flex-column py-5">
                        <h1>Carrito Vacio</h1>
                        <Link to={"/"} className="nav-link btn btn-dark">Continuar comprando</Link>
					</div>
				)
                : <ItemListCartContainer />

            }

        </div>
    )
}
