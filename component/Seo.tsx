import Head from 'next/head'

interface ISeo {
  title?: string
  description?: string
}

export default function Seo({ title, description }: ISeo) {
  const titleMsg = `${title ? `${title}` : `타이틀`}`
  const descriptionMsg = `${description ? `${description}` : `설명`}`

  return (
    <Head>
      <title>{titleMsg}</title>
      <meta name="description" content={descriptionMsg} />
    </Head>
  )
}
