import { BetweenRow, MobileBtn } from '@/styles/styled'
import Link from 'next/link'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HeaderSlider from './HeaderSlider'

const Container = styled.header`
  padding: 30px 80px;
  background-color: ${(props) => props.theme.containerColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  @media screen and (max-width: 1200px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 10px 20px;
  }
`

const Contents = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
const Item = styled.li`
  font-size: 0.875rem;
  color: ${(props) => props.theme.textLightColor};
  transition: color 0.2s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(1.4);
  }
`
export default function Header() {
  const { pathname } = useRouter()
  const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false)

  const onToggle = useCallback(() => {
    setHamburgerClicked(!hamburgerClicked)
  }, [hamburgerClicked])

  useEffect(() => {
    setHamburgerClicked(false)
  }, [pathname])
  return (
    <Container>
      <BetweenRow>
        <Link href="/">KIM dae-hwan</Link>
        <Contents>
          <Item>about</Item>
          <Item>stack</Item>
          <Item>portfolio</Item>
          <Item>contact</Item>
        </Contents>
        <MobileBtn onClick={onToggle}>
          <GiHamburgerMenu size={24} />
        </MobileBtn>
      </BetweenRow>

      <HeaderSlider visible={hamburgerClicked} />
    </Container>
  )
}
