import fs from 'fs'

const makeFolder = folder => {
  return new Promise((resolve, reject) => {
    fs.mkdir(folder, err => {
      if (err) {
        if (err.code === 'EEXIST') return resolve(folder) // ignore the error if the folder exists
        return reject(err) // something else went wrong
      }
      return resolve(folder) // successfully created folder
    })
  })
}
module.exports = makeFolder
