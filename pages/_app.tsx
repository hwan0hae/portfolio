import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import GlobalStyle from '@/styles/GlobalStyle'
import defaultTheme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}
