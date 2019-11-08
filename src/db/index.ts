import Dexie from 'dexie'
import {
  IProjectData,
  ITaskData,
  TUser,
  TUserCredentials
} from 'types'

class Database extends Dexie {
  public users: Dexie.Table<TUser, string>
  public projects: Dexie.Table<IProjectData, string>
  public tasks: Dexie.Table<ITaskData, string>

  public constructor () {
    super('Database')

    this.version(1).stores({
      users: 'id, &email, [email+password]',
      projects: 'id, userId, &[userId+title]',
      tasks: 'id, projectId'
    })

    this.users = this.table('users')
    this.projects = this.table('projects')
    this.tasks = this.table('tasks')
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

  public async insertProjectData (projectData: IProjectData): Promise<string> {
    return this.projects.put(projectData)
  }
}

const db = new Database()

export default db
