import username from 'username'
import prompt   from 'prompt'

import promptProps from './promptProps'

const API_TOKEN = process.env.GITHUB_TOKEN
const pathArray = process.cwd().split('/')
const folderName = pathArray[pathArray.length - 1]

const getUserInput = appName => {
  return new Promise((resolve, reject) => {
    username().then(owner => {
      const prompts = promptProps(owner, folderName)
      const defaultPrompts = {owner: prompts.owner, repo: prompts.repo, outputFolder: prompts.outputFolder}
      const promptOpts = !API_TOKEN ? {apiToken: prompts.apiToken, ...defaultPrompts} : defaultPrompts
      prompt.message = appName
      prompt.start()
      prompt.get({properties: promptOpts}, (err, results) => {
        if (err) return reject(err)
        const token = API_TOKEN || results.apiToken
        const {owner, repo, outputFolder} = results
        return resolve({token, owner, repo, outputFolder})
      })
    }, reject)
  })
}

module.exports = getUserInput
