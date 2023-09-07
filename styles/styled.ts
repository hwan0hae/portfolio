import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
`
export const Container = styled.div`
  padding: 20px;
`

export const BetweenRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export const MobileBtn = styled.button.attrs({ type: 'button' })`
  @media screen and (min-width: 900px) {
    display: none;
  }
`
