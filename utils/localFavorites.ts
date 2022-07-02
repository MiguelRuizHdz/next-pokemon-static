
const toggleFavorite = ( id: number ) => {

    console.log('toggleFavorite llamado');

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    if( favorites.includes(id) ) {
        favorites = favorites.filter( pokeId => pokeId !== id );
    } else {
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));    
}

const existPokemonInFavorites = ( id: number ): boolean => {
    
    // Si aun no estamos en el lado del cliente
    if ( typeof window === 'undefined' ) return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    return favorites.includes( id );
}

export default {
    existPokemonInFavorites,
    toggleFavorite,
}