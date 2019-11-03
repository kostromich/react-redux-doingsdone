import { IState, TUser } from 'types'

export const getUser = (state: IState): TUser | undefined =>
  state.global.user

export const getIsInitialized = (state: IState): boolean =>
  state.global.isInitialized
