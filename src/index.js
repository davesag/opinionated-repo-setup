import {render, makeFolder} from './filemaker'
import getUserInput         from './userInput'

require('dotenv').config()

process.on('unhandledRejection', function(reason, p) {
  console.log('Unhandled rejection in promise', p, 'caused by', reason)
})

getUserInput('Repo Setup').then(({token, owner, repo, outputFolder}) => {
  makeFolder(outputFolder).then(() => {
    render(outputFolder)(owner, repo)
  }, console.log)
}, console.log)
