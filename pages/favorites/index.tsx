import { useEffect, useState } from 'react';

import { Layout } from '../../componentes/layouts';
import { NoFavorites } from '../../componentes/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, [])
  

  return (
    <Layout title='Pokemons - Favoritos'>
        
        <NoFavorites />

    </Layout>
  );
};

export default FavoritesPage;