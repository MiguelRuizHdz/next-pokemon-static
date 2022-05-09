import { useRouter } from 'next/router';
import { Layout } from '../../componentes/layouts';

const PokemomPage = () => {


  const router = useRouter();
  console.log(router.query);



  return (
    <Layout >
        <h1>Hola Mundo</h1>
    </Layout>
  )
};

export default PokemomPage;