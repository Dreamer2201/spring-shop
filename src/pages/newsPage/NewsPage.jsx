import React from 'react'
import { useNavigate } from "react-router-dom"
import News from "../../components/news/News"


export default function NewsPage() {

    const navigate = useNavigate()

    const goHomePage = () => navigate('/')
    const goAllNesPage = () => navigate('/news')

  return (
    <div>
        <button type='button' onClick={goHomePage} >Home</button>
        <button type='button' onClick={goAllNesPage} >News</button>
        <News />
    </div>
  )
}
