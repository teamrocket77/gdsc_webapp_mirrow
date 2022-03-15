# Introduction
This webapp mirrors to https://dscksu.club .

Serves as the primary landing site for the **Google Developer Student Club @ Kennesaw State University**. 

# Installation

1. Git clone the repo.
2. cd into ``./src`` under the root directory.
3. ``npm ci`` to install node modules (it's a faster version of ``npm install`` but with less problems with the ``package-lock.json`` file). 
> **Note:** If ``npm ci`` is not available, it's likely that you do not have an npm version greater than or equal to 5.7. To correct this, run ``npm install -g npm`` in your shell.
4. ``npm run dev`` to run in development mode.
> **Warning:** You will never have to run the application in your local environment in production mode. Production mode is used in production deployment.

If you're confused by this, please reach out to a Project Manager or a Senior.

# Contributions

Master branch is **production**. Development is technically-speaking **release candidate**. If you're developing a feature or fixing a bug, **create a new branch**. When you're finished, **create a pull request** and in that pull request, go into depth about what your code does. Project Managers (& some Seniors) typically lead code reviews. All **pull requests** must be reviewed before entering release candidate or production. 

We **do not** allow outside contributors at this time.

# License

The license is **MIT**. This will be open sourced once we have a stable version. 