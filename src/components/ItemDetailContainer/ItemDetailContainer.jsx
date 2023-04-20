import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import { ItemDetail } from "../ItemDetail/ItemDetail"
import { all } from "../../services/products"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        all( true )
        .then( response => {
			const prod = response.find( prod => prod.id === parseInt( id ) )
			setItem(prod)
		});
    }, [ id ])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}

export { ItemDetailContainer }
