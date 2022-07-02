import { useEffect, useState } from 'react';
import { Card, Grid } from '@nextui-org/react';

import { Layout } from '../../componentes/layouts';
import { NoFavorites } from '../../componentes/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../componentes/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, [])
  

  return (
    <Layout title='Pokemons - Favoritos'>
        

      {
        favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons pokemons={favoritePokemons } /> )
      }
    </Layout>
  );
};

export default FavoritesPage;