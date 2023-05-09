
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCmX6mE-7BZ5ry2ckUGH5RuwfrmwtA1ftQ",
	authDomain: "react-eddy-huaylla-39655.firebaseapp.com",
	projectId: "react-eddy-huaylla-39655",
	storageBucket: "react-eddy-huaylla-39655.appspot.com",
	messagingSenderId: "187026121373",
	appId: "1:187026121373:web:b0e5453aa502afc4076a74"
};

const app = initializeApp( firebaseConfig );

const bdd = getFirestore( app );


export const createProducts = async () => {
	const promise = await fetch('./json/productos.json');

	const productos = await promise.json();

	productos.forEach( async ( prod ) => {
		await addDoc( collection( bdd, "productos" ), {
			nombre: prod.nombre,
			marca: prod.marca,
			modelo: prod.modelo,
			idCategoria: prod.idCategoria,
			idSubCategoria: prod.idSubCategoria || null,
			stock: prod.stock,
			precio: prod.precio,
			img: prod.img
		});
	});
}

export const getProducts = async () => {
	const prods = await getDocs( collection( bdd, "productos" ) );

	const items = prods.docs.map( prod => {
		return { ...prod.data(), id: prod.id }
	});

	return items;
}

export const getProduct = async ( idProduct ) => {
	const prod = await getDoc( doc( bdd, "productos", idProduct ));
	const item = { ...prod.data(), id: prod.id };
	return item;
}

export const updateProduct = async ( idProduct, info) => {
	await updateDoc( doc( bdd, "productos", idProduct ), info );
}

export const deleteProduct = async ( idProduct ) => {
	await deleteDoc( doc( bdd, "productos", idProduct ) );
}

export const createOrdenCompra = async ( cliente, precioTotal, carrito, fecha ) => {
	const ordenCompra = await addDoc( collection( bdd, "ordenCompra" ), {
		cliente: cliente,
		items: carrito,
		precioTotal: precioTotal,
		fecha: fecha
	});

	return ordenCompra;
}

export const getOrdenCompra = async ( idOrden ) => {
	const ordenCompra = await getDoc( doc( bdd, "ordenCompra", idOrden ) );
	const item = { ...ordenCompra.data(), id: ordenCompra.id };
	return item;
}

export const deleteOrdenCompra = async ( idOrden ) => {
	await deleteDoc( doc( bdd, "ordenCompra", idOrden ) );
}
