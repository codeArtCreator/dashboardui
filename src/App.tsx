import './App.css'
import Hero from './components/Hero'
import Main from './components/Main'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <SideBar />
      <div className='bg-gray-100 ml-60 min-h-screen' id='main-section'>
        <div className='mx-10 pt-5'>
          <NavBar />
          <Hero />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
