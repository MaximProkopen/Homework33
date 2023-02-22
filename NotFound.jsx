import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
    <div>Not Found page</div>
    <p>Please go to <Link to="/">main pages</Link></p>
    </div>
  )
}

export default NotFound