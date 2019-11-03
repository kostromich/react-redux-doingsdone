import Dexie from 'dexie'
import { TUser, TUserCredentials } from 'types'

class Database extends Dexie {
  public users: Dexie.Table<TUser, string>

  public constructor () {
    super('Database')

    this.version(1).stores({
      users: 'id, &email, [email+password]'
    })

    this.users = this.table('users')
  }

  public async insertUser (user: TUser): Promise<string> {
    return this.users.put(user)
  }

  public async getUserByEmail (email: string): Promise<TUser | undefined> {
    return this.users.where({ email }).first()
  }

  public async getUserByCredentials (credentials: TUserCredentials): Promise<TUser | undefined> {
    const { email, password } = credentials

    return this.users
      .where({ email, password })
      .first()
  }
}

const db = new Database()

export default db
