# opinionated-repo-setup

An opinionated command line utility to set up GitHub repositories exactly how I like them.

* `develop` [![Build Status](https://travis-ci.org/davesag/opinionated-repo-setup.svg?branch=develop)](https://travis-ci.org/davesag/github-label-fixer)
* `master` [![Build Status](https://travis-ci.org/davesag/opinionated-repo-setup.svg?branch=master)](https://travis-ci.org/davesag/github-label-fixer)

## What does it do?

```
npm install -g opinionated-repo-setup
```

then run `repo-setup`, supply your [GitHub personal token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/), ensuring that token gives the rights to edit project labels, create branches, and so forth, then supply your project owner name and the repository name, and it will do a bunch of stuff (_fill in details later_)

## Why?

I was sick of making the same changes by hand each time.

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
