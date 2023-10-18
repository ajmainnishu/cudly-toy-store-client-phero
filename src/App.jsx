import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './shared/Navigation'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  )
}

export default App
