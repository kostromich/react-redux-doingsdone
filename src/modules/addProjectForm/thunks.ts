import db from 'db'
import { push } from 'connected-react-router'
import { addProject } from 'modules/projects'
import * as actions from './actions'
import {
  getAddProjectFormFieldsErrors,
  getAddProjectFormProjectData,
  getAddProjectFormTitleValue,
  getUser
} from 'selectors'
import {
  projectTitleValidator,
  FORM_ERROR,
  USER_ERROR_NOT_AUTHORIZED,
  PROJECT_ERROR_SAVE
} from 'helpers/validators'
import { ROUTE_HOME_PAGE } from 'routes'
import { IProject, IState } from 'types'

export const validateTitle = (email: string) => async dispatch => {
  const errors = projectTitleValidator(email)

  dispatch(actions.setAddProjectFormTitleErrors(errors))
  dispatch(updateAddProjectFormErrors())
}

export const validateAddProjectForm = () => async (dispatch, getState: () => IState) => {
  dispatch(actions.setAddProjectFormTitleTouched(true))
  dispatch(validateTitle(getAddProjectFormTitleValue(getState())))

  dispatch(updateAddProjectFormErrors())
}

export const updateAddProjectFormErrors = () => async (dispatch, getState: () => IState) => {
  const formFieldsErrors = getAddProjectFormFieldsErrors(getState())

  if (formFieldsErrors.length > 0) {
    dispatch(actions.setAddProjectFormErrors([ FORM_ERROR ]))
  } else {
    dispatch(actions.setAddProjectFormErrors([]))
  }
}

export const saveProject = () => async (dispatch, getState: () => IState) => {
  const user = getUser(getState())

  if (!user) {
    return
  }

  if (!user) {
    dispatch(actions.setAddProjectFormErrors([ USER_ERROR_NOT_AUTHORIZED ]))
    return
  }

  const project: IProject = {
    data: getAddProjectFormProjectData(getState()),
    extra: {
      tasksCount: 0
    }
  }

  const id = await db.insertProjectData(project.data)

  if (!id) {
    dispatch(actions.setAddProjectFormErrors([ PROJECT_ERROR_SAVE ]))
  }

  dispatch(addProject(project))
  dispatch(push(ROUTE_HOME_PAGE))
}
