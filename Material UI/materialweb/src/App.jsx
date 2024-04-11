import React from 'react'
import Header from './component/Header'
import Foooter from './component/Foooter'
import Trust from './component/Trust'
import Banner from './component/Banner'
import Price from './component/Price'
import Question from './component/Question'
import Trial from './component/Trail'
import Tastimonial from './component/Tastimonial'

import Chart2 from './component/chart2/Chart2'
import Chart1 from './component/charts/Chart1'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Chart1/>
      <Chart2/>
      <Trust/>
      <Tastimonial/>
      <Price/>
      <Question/>
      <Trial/>
      <Foooter/>
    </div>
  )
}

export default App
