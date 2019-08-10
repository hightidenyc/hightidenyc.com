import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Styled from './Styled'

function divideArray(array) {
  const midpoint = Math.ceil(array.length / 2)
  const first = array.slice(0, midpoint)
  const second = array.slice(midpoint)
  return [first, second]
}

const COLS = true
/*


SEE: https://github.com/ademilter/bricklayer



*/

function TextSwitcher({ data }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  function handleTitle(i) {
    setCurrentIndex(currentIndex !== i ? i : null)
  }

  const cols = COLS ? divideArray(data) : [data]

  return (
    <Styled.Wrapper cols={COLS}>
      {cols.map((col, colIndex) => (
        <Styled.ColWrapper key={colIndex}>
          {col.map((item, i) => {
            const key = `${colIndex}${i}`
            const current = key === currentIndex
            return (
              <Styled.Item key={key} onClick={() => handleTitle(key)}>
                <Styled.Head>{item.heading}</Styled.Head>
                <motion.div
                  initial={false}
                  style={{ overflow: 'hidden' }}
                  transition={{ ease: 'easeOut', duration: 0.25 }}
                  animate={{
                    height: current ? 'auto' : '0',
                  }}
                >
                  <p>{item.body}</p>
                </motion.div>
              </Styled.Item>
            )
          })}
        </Styled.ColWrapper>
      ))}
    </Styled.Wrapper>
  )
}

export default TextSwitcher
