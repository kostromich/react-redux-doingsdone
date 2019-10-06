import { format } from 'date-fns'

const DATE_FORMAT = 'dd.MM.yyyy'

export const DEFAULT_HREF = '#'

export const getNowUnixTime = () => Math.round((new Date()).getTime() / 1000)

export const getRandomInt = (min, max): number => Math.floor(Math.random() * (max - min + 1)) + min

export const formatDateToDisplay = (date?: Date) =>
  date
    ? format(date, DATE_FORMAT)
    : ''
