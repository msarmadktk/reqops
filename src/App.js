import React from 'react'
import { Hero, Client, Community, Grade, Stats, Design, Smith, Blog, Footer } from './containers'

const App = () => {
  return (
    <div className='app'>
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