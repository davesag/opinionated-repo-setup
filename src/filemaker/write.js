import fs       from 'fs'

const write = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, content, err => {
      if (err) return reject(err)
      resolve()
    })
  })
}

module.exports = write
