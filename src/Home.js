import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Services } from './components/Services'
import Trusted from './components/Trusted'

export const Home = () => {
  return (
    <>
      <HeroSection title='NetShop' buttonTitle='Shop now' />
      <Services />
      <Trusted />
    </>
  )
}
