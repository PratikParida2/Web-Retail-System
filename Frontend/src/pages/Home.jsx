import React from 'react'
import Hero from '../components/Hero'
import LatexCollection from '../components/LatexCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'


const Home = () => {
  return (
    <div >
      <Hero/>
      <LatexCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
