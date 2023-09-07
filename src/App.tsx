import { Routes, Route } from 'react-router-dom'
import { Home } from './　pages/Home'
import { List } from './　pages/List'
import { Result } from './　pages/Result'
import { Explanation } from './　pages/Explanation'
import { Chat } from './　pages/Chat'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/result" element={<Result />} />
      <Route path="/explanation" element={<Explanation />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App
