import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/list')
  }
  return (
    <div>
      <h1>これは治療の意思決定を助けるためのアプリケーションです</h1> <br />
      <h2>治療について知っておきましょう</h2>
      <Button label="スタート" onClick={handleClickButton} variant="primary" />
      <Link to="/list">go to List page</Link>
    </div>
  )
}
