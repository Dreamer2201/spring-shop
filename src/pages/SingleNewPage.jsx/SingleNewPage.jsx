import React from 'react'
import { useNavigate } from "react-router-dom"

export default function SingleNewPage() {

    const navigate = useNavigate()

    const goHomePage = () => navigate('/')
    const goAllNesPage = () => navigate('/news')
    

  return (
    <>
        <button type='button' onClick={goHomePage} >Home</button>
        <button type='button' onClick={goAllNesPage} >All news</button>
        <div>SingleNewPage</div>
        <p>One new</p>
    </>
  )
}
