import React, { useState, createContext, useContext } from 'react'
import Link from 'next/link'
import Styled from './Styled'
import Heading from '../Heading'
import { Wrap } from '../../style'

const NAV_ITEMS = [
  { display: 'Work', href: '/work' },
  { display: 'Journal', href: '/journal/' },
  { display: 'About', href: '/about' },
  { display: 'Contact', href: '/contact' },
]

const NavContext = createContext()
function Nav() {
  const [mobileNavEnabled, setMobileNav] = useState(false)
  return (
    <NavContext.Provider value={{ mobileNavEnabled, setMobileNav }}>
      <Styled.Nav>
        <Styled.Wrap>
          <Logo />
          <BurgerMenu />
          <DesktopLinks />
        </Styled.Wrap>
        <Overlay />
      </Styled.Nav>
    </NavContext.Provider>
  )
}

function Logo() {
  return (
    <Link href="/">
      <a>
        <Styled.Logo />
      </a>
    </Link>
  )
}

function DesktopLinks() {
  return (
    <Styled.Links>
      {NAV_ITEMS.map(item => (
        <Link href={item.href} key={item.display}>
          <Styled.NavItem href="#">{item.display}</Styled.NavItem>
        </Link>
      ))}
    </Styled.Links>
  )
}

/* FOR MOBILE */

function BurgerMenu() {
  const { mobileNavEnabled, setMobileNav } = useContext(NavContext)
  return (
    <Styled.NavItem onClick={() => setMobileNav(!mobileNavEnabled)}>
      <Styled.Burger enabled={mobileNavEnabled} />
    </Styled.NavItem>
  )
}

function Overlay() {
  const { mobileNavEnabled, setMobileNav } = useContext(NavContext)

  return (
    <Styled.Overlay enabled={mobileNavEnabled}>
      <Wrap>
        <ul>
          {NAV_ITEMS.map(item => (
            <Heading as="li" headingStyle={0}>
              <Link href={item.href} key={item.display}>
                <a onClick={() => setMobileNav(false)}>{item.display}</a>
              </Link>
            </Heading>
          ))}
        </ul>
      </Wrap>
    </Styled.Overlay>
  )
}

// Nav.propTypes = {}

export default Nav
