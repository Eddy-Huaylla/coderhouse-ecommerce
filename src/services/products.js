import { PRODUCTS } from '../utils/constants'

export const all = ( condicional ) => {
	return new Promise(( resolve, reject ) => {
		if ( condicional ) {
			resolve( PRODUCTS )
		}
		reject("No posee los permisos necesarios")
	})
}
