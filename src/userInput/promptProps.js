const promptProps = (owner, folderName) => {
  const prompts = {
    apiToken: {
      name: 'apiToken',
      validator: /^[a-z0-9]+$/,
      hidden: true,
      message: 'Enter your GitHub Personal Access Token',
      warning: 'See https://help.github.com/articles/creating-an-access-token-for-command-line-use/ for how to create a personal access token'
    },
    owner: {
      name: 'owner',
      validator: /^[a-z0-9A-Z\-]+$/,
      warning: 'Owner name must be only letters, dashes, or numbers',
      message: 'Enter the name of the repository owner',
      required: true,
      default: owner
    },
    repo: {
      name: 'repo',
      validator: /^[a-z0-9A-Z\-]+$/,
      warning: 'Owner name must be only letters, dashes, or numbers',
      message: 'Enter the name of the github repo',
      required: true,
      default: folderName
    },
    outputFolder: {
      name: 'outputFolder',
      validator: /^[\.\/a-z0-9A-Z\-\_]+$/,
      warning: 'Output folder must be only letters, dashes, underscores, numbers, or a dot',
      message: 'Enter the name of the output folder',
      required: true,
      default: './output'
    }
  }
  return prompts
}
export default promptProps
