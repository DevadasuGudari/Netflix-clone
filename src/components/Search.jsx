import { useSearchParams } from 'react-router-dom'
import Row from './Row'

function Search() {
  const [params] = useSearchParams()
  const q = params.get('q')

  return (
    <div className="page">
      <Row key={q} title={'Results for ' + q} names={[q]} />
    </div>
  )
}

export default Search 