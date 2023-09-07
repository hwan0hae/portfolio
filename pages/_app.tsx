import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import GlobalStyle from '@/styles/GlobalStyle'
import defaultTheme from '@/styles/theme'
import { Nanum_Gothic } from 'next/font/google'

const nanum = Nanum_Gothic({ weight: '400', preload: false })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nanum.className}>
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </main>
  )
}
