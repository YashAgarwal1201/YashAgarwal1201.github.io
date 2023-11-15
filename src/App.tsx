import { useState } from 'react'
// import './App.css'
// import PageNotFound from './Pages/PageNotFound/PageNotFound'
import Header from './Components/Header/Header'

function App() {
  const [selectedButton, setSelectedButton] = useState('home')

  return (
    <div className='w-screen h-[100dvh] flex flex-col-reverse md:flex-row items-center bg-black'>
      <Header selectedButton={selectedButton} setSelectedButton={setSelectedButton} />

      <div className='h-full w-full flex justify-center items-center text-white border-2 rounded-md mx-1 my-2'>
        <p>Content</p>
      </div>
    </div>
  )
}

export default App
