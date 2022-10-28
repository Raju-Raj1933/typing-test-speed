import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import TypingBox from '../components/TypingBox';
import { GlobalStyles } from '../styles/global';

function HomePage() {

  return (
      <div className="canvas">
        <GlobalStyles/>
        <Header/>
        <TypingBox/>
        <Footer/>
      </div>
  )
}

export default HomePage