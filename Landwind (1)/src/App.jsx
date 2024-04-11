import React from 'react'
import Header from './Component/Header'
import Block from './Component/Block'
import SocialMedia from './Component/SocialMedia'
import Mid from './Component/Mid'
import Footer from './Component/Footer'
import Trial from './Component/Trial'
import Question from './Component/Question'
import Price from './Component/Price'
import Slider from './Component/Slider'
import Trust from './Component/Trust'


function App() {
  return (
    <div>
      <Header />
      <Block />
      
      <SocialMedia />
      <Mid />
      <Trust/>
      <Slider/>
      <Price/>
      <Question/>
      <Trial/>
      
        <Footer />
 
    </div>
  )
}

export default App
