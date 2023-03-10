import React from 'react'
import { useNavigate } from "react-router-dom"
import News from "../../components/news/News"
import { WrapperNewsPage } from './StyledNewsPage'

export default function NewsPage() {

    const navigate = useNavigate()

    const goHomePage = () => navigate('/')
    const goAllNesPage = () => navigate('/news')

  return (
    <WrapperNewsPage>
        <button type='button' onClick={goHomePage} >Home</button>
        <News />
    </WrapperNewsPage>
  )
}
