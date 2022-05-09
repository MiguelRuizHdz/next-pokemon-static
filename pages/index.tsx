import { NextPage, GetStaticProps } from 'next'

import { Button } from '@nextui-org/react'
import { Layout } from '../componentes/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse } from '../interfaces';

// title: Listado de Pokémons
const HomePage: NextPage = (props) => {

  console.log(props);

  return (
    <Layout title='Listado de Pokémons'>
      
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log( data );

  return {
    props: {
      pokemons: data.results
      
    }
  }
}

export default HomePage
