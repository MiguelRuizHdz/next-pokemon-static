import { FC, ReactNode } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
    children?: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name='author' content='Miguel Ruiz' />
            <meta name='description' content={`Información sobre el pokémon ${ title }`} />
            <meta name='keywords' content={`${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
            <meta property="og:image:alt" content="Pokémon" />
            <meta property="og:locale" content="es_mx" />
            <meta property="og:locale:alternate" content="es_es" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@miguelruizhdz"></meta>
            <meta name="twitter:creator" content="@miguelruizhdz"></meta>
            <meta name="twitter:title" content={`Información acerca de ${ title }`} />
            <meta name="twitter:description" content={`Esta página es sobre ${ title }`} />
            <meta name="twitter:image" content={`${ origin }/img/banner.jpg`} />
            <meta name="twitter:image:alt" content="Pokémon" />
        </Head>

        {/* Navbar */}
        <Navbar />

        <main style={{
          padding: '0 20px'
        }}>
            { children }
        </main>

    </>
  )
}
