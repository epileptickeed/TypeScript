import './App.scss'
import { Routes, Route } from 'react-router'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'

function App() {

  return (
    <div className='main_wrapper'>
      <Routes>

        <Route 
          path='/'
          element={<LogIn />}
        />
        <Route
          path='/signin'
          element={<SignIn />}
        >

        </Route>

      </Routes>
    </div>
  )
}

export default App
