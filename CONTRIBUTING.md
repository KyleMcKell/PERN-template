# Contributing

First off, thank you thank you!

## Setup

<ol>
  <li>Fork the repo</li>
  <li>Run yarn setup which will install all dependencies needed</li>
  <li>Create a branch</li>
</ol>

> Tip: Keep your `main` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/kentcdodds/react-fundamentals.git
> git fetch upstream
> git branch --set-upstream-to=upstream/main main
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `main`
> branch to use the upstream main branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `main` branch.
> Whenever you want to update your version of `main`, do a regular `git pull`.

Big shoutouts to Kent C Dodds for that excellent tip that I find in each of his repos 😀
