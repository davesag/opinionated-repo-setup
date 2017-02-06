# opinionated-repo-setup

An opinionated command line utility to set up GitHub repositories exactly how I like them.

**NOTE: This project is non-functional as of now. I'm still working on it.**

* `develop` [![Build Status](https://travis-ci.org/davesag/opinionated-repo-setup.svg?branch=develop)](https://travis-ci.org/davesag/github-label-fixer)
* `master` [![Build Status](https://travis-ci.org/davesag/opinionated-repo-setup.svg?branch=master)](https://travis-ci.org/davesag/github-label-fixer)

## What does it do?

Whenever I start a new repo for a client I find myself doing the same thing.

1. I replace all the default issue labels with ones I find more useful.
2. I create a standard `README.md`, `CONTRIBUTING.md`, and  `.travis.yml` file
3. I set up a `develop` branch and make it the default
4. I set up commit protections on the `master` and `develop` branches.
5. I create teams for 'admins', 'coders', and 'visitors' if those don't already exist, and set their permissions against the repo such that `admins` can admin the repo, `coders` can push code and `visitors` can read the code.
6. set up an `upstream` remote that points to the original repo, and prevent pushes to that upstream.

To save myself the bother of performing these steps manually I wrote this script.

## To use

```
npm install -g opinionated-repo-setup
```

Then create a repo (typically under a client's organisation account, but it will work if you make one under your own account), fork it (if you have created it under a client's organisation account), then clone it to your local machine.

Then, from within the project folder, run

```sh
repo-setup
```

Supply your [GitHub personal token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/), ensuring that token gives the rights to edit project labels, create branches, and so forth, then supply the upstream repo owner name, your github ID, and the repository name, and it will perform the steps listed above.

## Requirements

It's built for Node 6.9 or better. `nvm install 6.9.4` to ensure you are running the latest supported version of node.

## Development

To run this in development mode

```sh
npm run dev
```

## Tests

To run the unit tests

```sh
npm test
```

## Conbtributing

I am a fan of using the `forked git-flow` process to manage contributions.

Please see the [contributing notes](CONTRIBUTING.md) for details.

## Development Status

This is currently non-functional and under active development.

### Version history

* `0.0.1` — current version.
