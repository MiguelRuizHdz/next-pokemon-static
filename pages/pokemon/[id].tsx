import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { pokeApi } from '../../api';
import { Layout } from '../../componentes/layouts';
import { Pokemon } from '../../interfaces';

interface Props {
  pokemon: Pokemon
}

const PokemomPage: NextPage<Props> = ({ pokemon }) => {

  console.log(pokemon)

  return (
    <Layout title='Algun pokémon'>
        <h1>{ pokemon.name }</h1>
    </Layout>
  )
};



// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map( (value, index ) => `${ index + 1 }`);
  console.log({ pokemons151 });
  
  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id }  = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemomPage;