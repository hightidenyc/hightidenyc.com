import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Nav from './Nav'
import ImageWrapper from './ImageWrapper'

export const CarouselCtx = createContext()

export const Wrapper = ({ children, items }) => {
  const [index, setCurrentIndex] = useState(0)

  const { length } = items
  const nextIndex = (index + 1) % length
  const prevIndex = (index + length - 1) % length

  const getNext = () => setCurrentIndex(nextIndex)
  const getPrev = () => setCurrentIndex(prevIndex)

  if (items && items.length) {
    return (
      <ThemeProvider theme={{ count: items.length, index }}>
        <CarouselCtx.Provider value={{ items, index, getNext, getPrev }}>
          {children}
        </CarouselCtx.Provider>
      </ThemeProvider>
    )
  }
  console.error('items must be an array')
  return null
}

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export { Nav, ImageWrapper }
