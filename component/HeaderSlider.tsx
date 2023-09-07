import { HEADER_CATEGORY } from '@/types/data'
import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'styled-components'

const Contents = styled(motion.ul)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  :first-child {
    margin-top: 10px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`

const Item = styled.li`
  padding: 12px 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.textLightColor};
  transition: color 0.2s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(1.4);
  }
`

export default function HeaderSlider({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <Contents
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{
            opacity: 1,
            height: 'auto',
            marginTop: 10,
          }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
        >
          {HEADER_CATEGORY.map((data) => (
            <Item key={data}>{data}</Item>
          ))}
        </Contents>
      )}
    </AnimatePresence>
  )
}
