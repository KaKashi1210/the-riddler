import { User } from "../types"

let users: User[] = []

const addUser = (id: string, name: string, room: string): { user: User } | { error: string } => {

  if (!name || !room) return { error: "Username or room must be provided" }

  const existingUser = users.find(user => user.name.trim().toLowerCase() === name.trim().toLowerCase())
  if (existingUser) return { error: "Username has already been taken" }

  const user = { id, name, room }
  users.push(user)
  return { user }
}


const getUser = (id: string): User | undefined => {

  let user = users.find(user => user.id == id)

  return user

}


const deleteUser = (id: User['id']) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
}

const getUsers = (room: User['room']) => users.filter(user => user.room === room)

export { addUser, getUser, deleteUser, getUsers }
