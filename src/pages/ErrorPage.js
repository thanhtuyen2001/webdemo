import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageNotFound from "../images/404.png";

const ErrorPage = () => {
    let navigate = useNavigate();

  return (
    <div>
      {/* ERRO! THIS PAGE NOT EIST (✿◠‿◠) */}
      {/* <button onClick={() => {navigate('/home')}}> back to home page</button> */}
      <img  src={PageNotFound} alt="" />

    </div>
  )
}

export default ErrorPage
