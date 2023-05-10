import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"

const ItemList = ( { products, template } ) => {
    return (
        <>
            {
                template === "Item"
                    ?
                    products.map(producto => <Item key={ producto.id } item={ producto } />)
                    :
                    products.map(producto => <ItemCart key={producto.id} item={ producto } />)
            }

        </>
    )
}

export { ItemList }
