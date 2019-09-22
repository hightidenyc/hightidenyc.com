import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import Arrow from '../Arrow'

function Header({ children, link, line }) {
  return (
    <Styled.Header line={line}>
      <h5>{children}</h5>
      {link && (
        <h5>
          {link}
          <Arrow />
        </h5>
      )}
    </Styled.Header>
  )
}

Header.defaultProps = {
  line: false,
  link: null,
}

Header.propTypes = {
  line: PropTypes.bool,
  link: PropTypes.element,
  children: PropTypes.string.isRequired,
}
export default Header
