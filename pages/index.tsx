import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../componentes/layouts'
import { PokemonListResponse, SmallPokemon} from '../interfaces';
import { PokemonCard } from '../componentes/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

// title: Listado de Pokémons
const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokémons'>
      
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( poke ) => (
            <PokemonCard key={ poke.id } pokemon={ poke } />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log( data );
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))

  return {
    props: {
      pokemons 
    }
  }
}

export default HomePage
