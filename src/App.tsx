import { Routes, Route } from 'react-router-dom'
import { Home } from './　pages/Home'
import { List } from './　pages/List'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<List />} />
    </Routes>
  )
}

export default App
