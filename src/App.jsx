import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Landing from './components/Landing'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/stats' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
