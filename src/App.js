import React from 'react'
import { Hero, Client, Community, Grade, Stats, Design, Smith, Blog, Footer } from './containers'

const App = () => {
  return (
    <div className='m-0'>
      <Hero />
      <Client />
      <Community />
      <Grade />
      <Stats />
      <Design />
      <Smith />
      <Blog />
      <Footer />

    </div>
  )
}

export default App