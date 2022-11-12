import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    li {
      list-style: none;
      .navbar-link {
        text-decoration: none;
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <div className='menuIcon'>
        <ul className='navbar-list'>
          <li>
            <NavLink className={'navbar-link'} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={'navbar-link'} to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={'navbar-link'} to='/products'>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={'navbar-link'} to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

export default Navbar
