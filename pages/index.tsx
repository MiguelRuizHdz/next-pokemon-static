import { NextPage, GetStaticProps } from 'next'

import { Button } from '@nextui-org/react'
import { Layout } from '../componentes/layouts'

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
  
  console.log('Hola Mundo');

  return {
    props: {
      name: 'Miguel'
    }
  }
}

export default HomePage
