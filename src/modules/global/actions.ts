import * as types from './types'
import { TUser } from 'types'

export const setInitialized = (isInitialized: boolean) =>
  ({ type: types.SET_INITIALIZED, payload: isInitialized })

export const setUser = (user?: TUser) =>
  ({ type: types.SET_USER, payload: user })
