import Dexie from 'dexie'
import {
  IProject,
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

  private async getProjectTasksCount (projectData: IProjectData): Promise<number> {
    return this.tasks.where({ projectId: projectData.id }).count()
  }

  public async getUserProjects (user: TUser): Promise<IProject[]> {

    const projectsData = await this.projects.where({ userId: user.id }).toArray()

    const projects: IProject[] = []
    for (const projectData of projectsData) {
      const tasksCount = await this.getProjectTasksCount(projectData)

      projects.push({
        data: projectData,
        extra: {
          tasksCount
        }
      })
    }

    return projects
  }

  public async isUserProjectExists (user: TUser, projectData: IProjectData): Promise<boolean> {
    const count = await this.projects.where({ userId: user.id, title: projectData.title }).count()

    return count > 0
  }
}

const db = new Database()

export default db
