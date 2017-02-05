import {render} from './filemaker'
import makeFolder from './filemaker/makeFolder'

require('dotenv').config()

process.on('unhandledRejection', function(reason, p) {
  console.log('Unhandled rejection in promise', p, 'caused by', reason)
})

const outputFolder = ('./output')

makeFolder(outputFolder).then(() => {
  render(outputFolder)('testOwner', 'testRepo')
}, err => console.log(err))

