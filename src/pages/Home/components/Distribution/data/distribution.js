import store1 from '../assets/store-1.png';
import store2 from '../assets/store-2.png';
import store3 from '../assets/store-3.png';
import store4 from '../assets/store-4.png';

export const DISTRIBUTION_CITIES = {
    CARACAS: 'Caracas',
    MIRANDA: 'Miranda',
    BOLIVAR: 'Bolívar',
    BARQUISIMETO: 'Barquisimeto',
    SAN_CRISTOBAL: 'San Cristóbal',
    ISLA_MARGARITA: 'Isla de Margarita'
}

export const DISTRIBUTION_STORES = [
    {
        id: 1,
        name: 'Las Villas Orinokia Mall',
        city: DISTRIBUTION_CITIES.BOLIVAR,
        storeImg: store1
    },
    {
        id: 2,
        name: 'Las Villas Paseo Las Mercedes',
        city: DISTRIBUTION_CITIES.CARACAS,
        storeImg: store2
    },
    {
        id: 3,
        name: 'Las Villas Sambil',
        city: DISTRIBUTION_CITIES.BARQUISIMETO,
        storeImg: store3
    },
    {
        id: 4,
        name: 'Las Villas Sambil',
        city: DISTRIBUTION_CITIES.ISLA_MARGARITA,
        storeImg: store4
    }
]