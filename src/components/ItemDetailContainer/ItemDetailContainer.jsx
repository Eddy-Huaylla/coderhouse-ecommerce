import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import { ItemDetail } from "../ItemDetail/ItemDetail"

import { getProduct } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState([]);
    const { id } = useParams()

    useEffect( () => {
		getProduct( id )
		.then( prod => setItem( prod ) )
    }, [ id ] )

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={ item } />
        </div>
    )
}

export { ItemDetailContainer }
