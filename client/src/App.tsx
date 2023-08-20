// import { useState } from 'react'
// import './App.css'
import {Flex} from '@radix-ui/themes'
import Index from './pages'
function App() {
  // const [count, setCount] = useState(0)
    return(
    <>
     <Flex direction="column" gap="2">
     <Index/>
    </Flex>
    </>
  )
}

export default App

