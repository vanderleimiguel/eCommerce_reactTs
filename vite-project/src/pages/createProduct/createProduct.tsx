import { useNavigate } from 'react-router-dom'

export function CreateProduct() {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        Go to home
      </button>
    </div>
  )
}
