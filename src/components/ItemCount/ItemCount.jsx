import { useCount } from "../../hooks/useCount.js";

import './styles.scss';

const ItemCount = ({ ValInicial, min, max, onAdd }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
	<div className="item-count">
		<button className="btn btn-light" onClick={minus}>-</button>
			{count}
		<button className="btn btn-light" onClick={sum}>+</button>
		<button className="btn btn-light" onClick={reset}>Reset</button>
		<button className="btn btn-dark w-100" onClick={() => onAdd(count)}>Agregar al Carrito</button>
	</div>
  )
}

export { ItemCount }
