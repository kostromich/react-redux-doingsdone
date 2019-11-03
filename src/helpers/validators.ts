export const FIELD_ERROR_EMPTY = 'Заполните поле'
export const EMAIL_ERROR_WRONG_FORMAT = 'Введите корректный email'
export const EMAIL_ERROR_DUPLICATE = 'Пользователь с таким email уже зарегистрирован: выберите другой адрес'
export const USER_ERROR_NOT_FOUND = 'Пользователь с такими данным не найден: проверь правильность ввода'
export const FORM_ERROR = 'Пожалуйста, исправьте ошибки в форме'

export const notEmptyValidator = (value: any): string | null => {
  if (
    undefined === value
    || null === value
    || '' === value.toString().trim()
  ) {
    return FIELD_ERROR_EMPTY
  }

  return null
}

export const emailRegexpValidator = (email?: string): string | null => {
  const validEmailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

  if (email && validEmailRegexp.test(email)) {
    return null
  }

  return EMAIL_ERROR_WRONG_FORMAT
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
