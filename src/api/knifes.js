import knifes from '@/data/knifes'

export function getKnifes (timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(knifes)
    }, timeout)
  })
}