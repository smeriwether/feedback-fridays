import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import SessionReview from './pages/SessionReview'
import SessionExplanation from './pages/SessionExplanation'
import SessionOverview from './pages/SessionOverview'

function App() {
  const navigate = useNavigate()
  const startOver = () => {
    navigate('/')
  }
  return (
    <>
      <nav className='w-full p-2 pr-4 flex justify-end'>
        <button onClick={startOver} className='underline'>
          Start over
        </button>
      </nav>

      <main className='max-w-screen-sm mx-auto mt-24'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explain/:token' element={<SessionExplanation />} />
          <Route path='/review/:token' element={<SessionReview />} />
          <Route path='/overview/:token' element={<SessionOverview />} />
        </Routes>
      </main>
    </>
  )
}

export default App
