import * as types from './types'
import { IProjectsState } from 'types'

const initialState: IProjectsState = {
  ids: [ 'p1', 'p2' ],
  entities: {
    'p1': {
      data: {
        id: 'p1',
        name: 'Авто',
        createdAt: 1
      },
      extra: {
        tasksCount: 0
      }
    },
    'p2': {
      data: {
        id: 'p2',
        name: 'Семья',
        createdAt: 2
      },
      extra: {
        tasksCount: 0
      }
    }
  }
}

export default (state: IProjectsState = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ACTIVE_PROJECT_ID: {
      return {
        ...state,
        activeProjectId: payload
      }
    }

    default:
      return state
  }
}
