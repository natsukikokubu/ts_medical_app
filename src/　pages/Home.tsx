import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>これは治療の意思決定をするためのアプリケーションです</h1> <br />
      <h2>意識があるうちに決めておこう</h2>
      <Link to="/List">go to List page</Link>
    </div>
  )
}
