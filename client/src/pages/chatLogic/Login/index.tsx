import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const Login = () => {
  const socket = io('ws://localhost:3000/', {transports: [ 'websocket','polling']})
  const [users, setUsers] = useState([])
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')

  useEffect( () => {
    socket.on('users', users => {
          setUsers(users)
        })
  }, [])

  const handleClick = () => {
    socket.emit('login' , {name , room} , error => {
      if(error){
        console.log(error)
        return <h1>Error</h1>
      }
      return <h1>{room}</h1>
    })
  }

  return (
    <>
      <h1>login logic</h1>
      
      <br/>
      <input type='text' placeholder='enter ur name' onChange={({target:{ value } }) => setName(value)} />
      <input type='text' placeholder='enter ur room' onChange={({target:{ value } }) => setRoom(value)} />
      <button onClick={handleClick}> submit </button> 
    </>
  )

}


export default Login
