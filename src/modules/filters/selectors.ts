import { IState } from 'types'

export const getActiveProjectId = (state: IState): string | undefined =>
  state.filters.activeProjectId
