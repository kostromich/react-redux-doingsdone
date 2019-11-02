import Dexie from 'dexie'
import { IUser } from 'types'

class Database extends Dexie {
  public users: Dexie.Table<IUser, string>

  public constructor () {
    super('Database')

    this.version(1).stores({
      users: 'id, &email'
    })

    this.users = this.table('users')
  }

  public async insertUser (user: IUser): Promise<void> {
    await this.users.put(user)
  }

  public async getUserByEmail (email: string): Promise<IUser | undefined> {
    return this.users.where({ email }).first()
  }
}

const db = new Database()

export default db
