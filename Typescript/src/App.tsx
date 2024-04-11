import { Provider } from 'react-redux'
import './App.css'

import { store } from './Redux/store/store'
import Home from './components/Home'

function App() {

  return (
    <>
      <Provider store={store}>
        <Home/>
      </Provider>
      {/* <AddUser/> */}
    </>
  )
}

export default App
