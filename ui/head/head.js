import Head from 'next/head'

const HeadComponent = () => {
  return (
    <Head>
      <title>Front-end Week 2023 &bull; 9ª Edição</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="Confira a programação da 10ª edição da Front-End Week." />
      <meta name="format-detection" content="telephone=no" />

      <meta property="og:title" content="Front-end Week 2023 &bull; 9ª Edição" />
      <meta property="og:image" content="/frontendweek-share.png" />
      <meta property="og:url" content="http://frontendweek.com.br/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Front-end Week" />
      <meta property="og:description" content="Confira a programação da 10ª edição da Front-End Week." />

      <meta name="twitter:title" content="Front-end Week 2023 &bull; 10ª Edição" />
      <meta name="twitter:description" content="Confira a programação da 10ª edição da Front-End Week." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/frontendweek-share.png" />
      <meta name="twitter:site" content="@frontendweek" />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
      <meta name="theme-color" content="#000000" />

      <link rel='icon' href='/favicon-32x32.png' />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet"></link>

    </Head>
  )
}

export { HeadComponent }
