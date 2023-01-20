import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
`

export const Home = () => {
  return <Wrapper className='test'>Home</Wrapper>
}
