export const MENU = [
	{
		'slug': 'celulares',
		'label': 'Celulares',
	},
	{
		'slug': 'computadoras',
		'label': 'Computadoras',
	},
	{
		'slug': 'tablets',
		'label': 'Tablets',
	},
	{
		'slug': 'accesorios',
		'label': 'Accesorios',
		'child': [
			{
				'slug': 'teclados',
				'label': 'Teclados',
			},
			{
				'slug': 'parlantes',
				'label': 'Parlantes',
			}
		]
	}
];

export const PRODUCTS = [
	{
		"id": 1,
		"idCategoria": 1,
		"nombre": "Redmi note 10 pro 256GB 8GB RAM",
		"marca": "Xiaomi",
		"modelo": "Redmi note 10 pro",
		"precio": 1758.00,
		"stock": 30,
		"img": "imgs/celulares/1.webp"
	},
	{
		"id": 2,
		"idCategoria": 1,
		"nombre": "Redmi Note 12 Pro 4G 128GB/6GB RAM",
		"marca": "Xiaomi",
		"modelo": "Redmi Note 12 Pro",
		"precio": 1077.00,
		"stock": 20,
		"img": "imgs/celulares/2.webp"
	},
	{
		"id": 3,
		"idCategoria": 1,
		"nombre": "Redmi note 10 pro 128GB 6GB RAM",
		"marca": "Xiaomi",
		"modelo": "Redmi note 10 pro",
		"precio": 1030.00,
		"stock": 15,
		"img": "imgs/celulares/3.jpeg"
	},
	{
		"id": 4,
		"idCategoria": 1,
		"nombre": "iPhone 12 Negro 64 GB Reacondicionado",
		"marca": "Apple",
		"modelo": "12",
		"precio": 2350.00,
		"stock": 30,
		"img": "imgs/celulares/4.webp"
	},
	{
		"id": 5,
		"idCategoria": 1,
		"nombre": "Iphone SE 2020 64GB Rojo Seminuevo Grado A Reacondicionado",
		"marca": "Apple",
		"modelo": "SE 2020 ",
		"precio": 930.00,
		"stock": 7,
		"img": "imgs/celulares/5.webp"
	},
	{
		"id": 6,
		"idCategoria": 2,
		"nombre": "Computadora 1",
		"marca": "Samsung",
		"modelo": "L35",
		"precio": 536.22,
		"stock": 20,
		"img": "imgs/computadoras/1.webp"
	},
	{
		"id": 7,
		"idCategoria": 2,
		"nombre": "Computadora 2",
		"marca": "Samsung",
		"modelo": "L37",
		"precio": 596.00,
		"stock": 10,
		"img": "imgs/computadoras/2.jpeg"
	},
	{
		"id": 8,
		"idCategoria": 2,
		"nombre": "Ultra Grear",
		"marca": "Lg",
		"modelo": "Lh58",
		"precio": 1555.00,
		"stock": 30,
		"img": "imgs/computadoras/3.jpeg"
	},
	{
		"id": 9,
		"idCategoria": 2,
		"nombre": "Xiaomi Mi",
		"marca": "Xiami ",
		"modelo": "M54",
		"precio": 851.00,
		"stock": 30,
		"img": "imgs/computadoras/4.jpeg"
	},
	{
		"id": 10,
		"idCategoria": 3,
		"nombre": "Tablet para Niños Advance 7 pulg. Android 10 Go 16GB, 1GB Ram 2800mah AZUL Intro TR6949",
		"marca": "Advance",
		"modelo": "TR6949",
		"precio": 303.00,
		"stock": 25,
		"img": "imgs/tablets/1.webp"
	},
	{
		"id": 11,
		"idCategoria": 3,
		"nombre": "Tablet LTE Samsung Galaxy Tab S6 Lite SM-P619 10.4 Pulgadas FHD S-Pen",
		"marca": "Samsung",
		"modelo": "S6 Lite",
		"precio": 2351.90,
		"stock": 30,
		"img": "imgs/tablets/2.webp"
	},
	{
		"id": 12,
		"idCategoria": 3,
		"nombre": "Tablet Lenovo PAD 2022 10.6'' Snapdragon 680 - 6GB RAM 128GB ROM Color Gris",
		"marca": "Lenovo",
		"modelo": "PAD 2022",
		"precio": 959.50,
		"stock": 20,
		"img": "imgs/tablets/3.webp"
	},
	{
		"id": 13,
		"idCategoria": 3,
		"nombre": "Tablet LTE Samsung Galaxy Tab S7 FE SM-T735N 12.4 Pulgadas 2560 x 1600 WQXGA",
		"marca": "Samsung",
		"modelo": "Tab S7 FE",
		"precio": 2895.60,
		"stock": 20,
		"img": "imgs/tablets/4.webp"
	},
	{
		"id": 14,
		"idCategoria": 4,
		"idSubCategoria": 1,
		"nombre": "Teclado Mecánico Gamer T-dagger Bora Rainbow Blue Switch",
		"marca": "dagger",
		"modelo": "Bora Rainbow",
		"precio": 117.60,
		"stock": 20,
		"img": "imgs/accesorios/teclados/1.webp"
	},
	{
		"id": 15,
		"idCategoria": 4,
		"idSubCategoria": 1,
		"nombre": "Teclado Logitech K380 Multi-Device Bluetooth Black",
		"marca": "Logitech",
		"modelo": "K380",
		"precio": 137.20,
		"stock": 20,
		"img": "imgs/accesorios/teclados/2.webp"
	},
	{
		"id": 16,
		"idCategoria": 4,
		"idSubCategoria": 2,
		"nombre": "Parlantes monitores de estudio Behringer Media 50 USB 150w",
		"marca": "Behringer",
		"modelo": "150w",
		"precio": 881.20,
		"stock": 20,
		"img": "imgs/accesorios/parlantes/1.webp"
	},
	{
		"id": 17,
		"idCategoria": 4,
		"idSubCategoria": 2,
		"nombre": "Parlantes monitores de estudio Behringer MS 16",
		"marca": "Behringer",
		"modelo": "MS 16",
		"precio": 551.20,
		"stock": 20,
		"img": "imgs/accesorios/parlantes/2.webp"
	}
]
