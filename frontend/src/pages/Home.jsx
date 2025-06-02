import React from 'react'
import Opening from '../components/Opening'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'
import Community from '../components/community'

const Home = () => {
  return (
    <div>
      <Opening/>
      <LatestCollection/>
      <Community/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home