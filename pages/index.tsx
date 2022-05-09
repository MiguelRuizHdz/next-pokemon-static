import { NextPage, GetStaticProps } from 'next'

import { Layout } from '../componentes/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon} from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

// title: Listado de Pokémons
const HomePage: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons);

  return (
    <Layout title='Listado de Pokémons'>
      
      <ul>
        {
          pokemons.map( ({id, name}) =>
            <li key={id}>
              #{ id } - { name }
            </li>  

          )
        }
      </ul>

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
