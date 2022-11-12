import { NavLink, useRoutes } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const StyledHero = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`

const placeholderImage =
  'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

const Hero = () => {
  return (
    <StyledHero>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
          <p className='hero-top-data'>Something</p>
          <h1 className='hero-heading'>Something big</h1>
          <p className='hero-para'>Something</p>
          <Button className='btn aboutme-btn'>
            <NavLink to={'/contact'}>Got it</NavLink>
          </Button>
        </div>

        <div className='section-hero-image'>
          <picture>
            <img src={placeholderImage} alt='hero image' className='hero-img' />
          </picture>
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero
