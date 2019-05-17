export default function getDate () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('dictionary')
    }, 1000)
  })
}
