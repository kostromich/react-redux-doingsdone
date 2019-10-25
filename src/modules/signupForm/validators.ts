export const EMPTY_VALUE_ERROR = 'Заполните поле'
export const WRONG_EMAIL_FORMAT_ERROR = 'Введите корректный email'
export const SIGNUP_FORM_ERROR = 'Пожалуйста, исправьте ошибки в форме'

export const notEmptyValidator = (value: any): string | null => {
  if (
    undefined === value
    || null === value
    || '' === value.toString().trim()
  ) {
    return EMPTY_VALUE_ERROR
  }

  return null
}

export const emailRegexpValidator = (email?: string): string | null => {
  const validEmailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

  if (email && validEmailRegexp.test(email)) {
    return null
  }

  return WRONG_EMAIL_FORMAT_ERROR
}

const filterEmptyErrors = (errors: Array<string | null>): string[] => errors.filter(Boolean) as string[]

export const nameValidator = (name?: string): string[] =>
  filterEmptyErrors([
    notEmptyValidator(name)
  ])

export const emailValidator = (email?: string): string[] =>
  filterEmptyErrors([
    notEmptyValidator(email) || emailRegexpValidator(email)
  ])

export const passwordValidator = (password?: string): string[] =>
  filterEmptyErrors([
    notEmptyValidator(password)
  ])
