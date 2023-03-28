import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import Card from './components/CharDetail'
import Welcome from './pages/Welcome'
import NotFound from './pages/NotFound'
import Characters from './components/CharList'

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/characters" element={<Characters />} exact></Route>
          <Route path="/characters/:id" element={<Card />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App