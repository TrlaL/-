import catalogs from '@/data/catalogs'

export function getCatalogs () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(catalogs)
    }, 500)
  })
}