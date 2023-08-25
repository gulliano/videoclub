import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Liste from './Liste'
import Detail from './Detail'

function App() {


  return (
  <Routes>
      <Route path='/' element={<Liste/>} />
      <Route path='/detail/:idvideo' element={<Detail />} />
  </Routes>
  )
}

export default App
