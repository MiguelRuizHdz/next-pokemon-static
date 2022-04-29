import { NextPage } from 'next'

import { Button } from '@nextui-org/react'
import { Layout } from '../componentes/layouts'

// title: Listado de Pokémons
const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de Pokémons'>
      <Button color="gradient">
        Hola Mundo
      </Button>
    </Layout>
  )
}

export default HomePage
