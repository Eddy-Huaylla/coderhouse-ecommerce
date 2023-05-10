import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const FormCheckout = () => {
	const datForm = useRef();

	const mostrarAlerta = ( texto ) => {
		toast( texto , {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		} );
	}

    const consultarForm = ( e ) => {
        e.preventDefault();

        const datosFormulario = new FormData( datForm.current );
        const cliente = Object.fromEntries( datosFormulario );
		const valoresCliente = Object.values( cliente );

		if ( valoresCliente.every( valor => valor !== '') ) {

			if( cliente.email !== cliente.emailRepetido ) {
				mostrarAlerta( '📧 El email tiene que ser igual.' );
				return;
			}

			console.log('ok');
			e.target.reset();
		} else {
			mostrarAlerta( '⚠️ Completar todos los datos' );
			return;
		}
    }

	return (
		<div className="container divForm" >
            <form onSubmit={ consultarForm } ref={ datForm }>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="emailRepetido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>
	);
}

export { FormCheckout };
