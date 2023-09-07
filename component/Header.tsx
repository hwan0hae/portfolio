import styled from 'styled-components'

const Container = styled.header`
  padding: 30px 20px;
  background-color: ${(props) => props.theme.containerColor};
`

export default function Header() {
  return <Container>KIM dae-hwan</Container>
}
