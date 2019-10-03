export const DEFAULT_HREF = '#'

export const getNowUnixTime = () => Math.round((new Date()).getTime() / 1000)

export const getRandomInt = (min, max): number => Math.floor(Math.random() * (max - min + 1)) + min
