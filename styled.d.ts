import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string
    textLightColor: string
    bgColor: string
    containerColor: string
    activeColor: string
    borderColor: string
  }
}
