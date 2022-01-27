import React from 'react'
import './index.css'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecommendedVideos from './components/RecommendedVideos'

function App() {
  //BEM class naming convention
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  )
}

export default App
