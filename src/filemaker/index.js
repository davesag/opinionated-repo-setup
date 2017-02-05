import fs       from 'fs'
import path     from 'path'
import Mustache from 'mustache'

import getTemplates from './getTemplates'
import write        from './write'
import makeFolder   from './makeFolder'

const handleError = err => console.error('Caught error', err)

const render = outputFolder => (owner, repo) => {
  const view = {
    owner,
    repo
  }
  const handleTemplates = templates => {
    const promises = templates.map(({input, output, promisedContent}) => {
      return promisedContent.then(
        buffer => {
          const template = buffer.toString('utf8')
          const rendered = Mustache.render(
            template,
            view
          )
          return write(path.join(outputFolder, output), rendered)
        },
        handleError
      )
    })
    Promise.all(promises).then(() => console.log('done'))
  }

  getTemplates().then(handleTemplates, handleError)
}

module.exports = {
  render,
  makeFolder
}
