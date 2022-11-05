import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    let navigate = useNavigate();

  return (
    <div>
      ERRO! THIS PAGE NOT EIST (✿◠‿◠)
      <button onClick={() => {navigate('/home')}}> back to home page</button>
    </div>
  )
}

export default ErrorPage
