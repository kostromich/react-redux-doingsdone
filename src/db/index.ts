import Dexie from 'dexie'
import { IUser } from '../types'

const db = new Dexie('react-redux-doingsdone')
db.version(1).stores({
  users: 'id,email,name,password'
})

export const addUser = async (user: IUser) => db.table('users').add(user)

export default db
