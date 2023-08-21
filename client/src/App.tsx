import { Route, Routes } from 'react-router-dom'
import Index from './pages'
import Login from './pages/chatLogic/Login'

const App = () => {
     
    return(
    <>
    <Routes>
     <Route path="/" element={<Index/>} />
     <Route path="chat" element={<Login/>} />
    </Routes>
    </>

  )
}

export default App

