import React from 'react'
import Banner from '../components/Banner'
import FlashDeals from '../components/FlashDealCard'

function HeroSection() {
  return (
    <section className='flex flex-col items-center'>
        <Banner/>
        <FlashDeals/>
    </section>
  )
}

export default HeroSection