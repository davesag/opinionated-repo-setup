import fs       from 'fs'
import path     from 'path'

import shave from './shave'

const TEMPLATE_FOLDER = path.join(__dirname, '../templates')

const read = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (err) return reject(err)
      resolve(content)
    })
  })
}

const getTemplates = () => {
  const filterMustache = filename => filename.endsWith('.mustache')

  return new Promise((resolve, reject) => {
    fs.readdir(TEMPLATE_FOLDER, (err, files) => {
      if (err) return reject(err)
      const result = files
        .filter(filterMustache)
        .map(file => {
          const input = path.join(TEMPLATE_FOLDER, file)
          const promisedContent = read(input)
          const output = shave(file)
          return {input, output, promisedContent}
        })
      return resolve(result)
    })
  })
}
module.exports = getTemplates
