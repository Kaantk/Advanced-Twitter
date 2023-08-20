import { Routes, Route } from 'react-router-dom'
import LoginPage from './views/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' Component={LoginPage}></Route>
      </Routes>
    </>
  )
}

export default App
