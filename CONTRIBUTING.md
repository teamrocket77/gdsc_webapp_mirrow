# Contributing Code

## Getting Started

This project uses Nodejs (v16.x.x). It's recommended that you install Nodejs before attempting to
contribute code or run the project. Here, you'll find information about how to setup your development
environment. This varies from platform-to-platform but, it's largely the same across all.

## Permissions

In order to write code, create issues and pull requests, you must be part of 
[Github Organization](https://github.com/KSU-Google-DSC). Please follow-up with an Organization 
Administrator to set that up for you. If this is not done, you'll only have read-access to the repo.


## Installing Nodejs

As stated above, this project uses a minimum version 16 for Nodejs. Unfortunately, we found that backwards
compatibility was not possible with earlier versions because the dependencies used rely on newer features.
Future versions are supported but, we can't guarantee that it'll work up to par. Nodejs is quite easy to install.
Please navigate [here](https://nodejs.org/en/download/) to install the version that fits your platform. As
of writing this, the project has been tested throughly on v16.17.1 (LTS) w/ NPM 8.15.0. 

## Importing the Git Repo

In order to contribute, you have to install the git repo to your machine. Depending on which platform you're on,
we recommend storing the repo in desktop or documents. Please do not store the repo in downloads to prevent accidental
overwrite if you choose to manually install the repo directly. 

Please follow these steps below:

``git clone https://github.com/KSU-Google-DSC/Webapp.git``

> **Note:** If this does not work, you may have to setup SSH keys on your device. 
You can learn more [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

At this point, you should see a folder structure that mirrors the repo.

## Environmental Variables

In order to properly test, it's important that you import environmental variables into your project. 
In order to do it correctly, please follow these steps:

Create a file in ``./src`` called ``.env.development``. 

Paste in the contents below.
```yml
SECRET: ""
NEXTAUTH_SECRET: ""
GOOGLE_PROVIDER_CLIENT_ID: ""
GOOGLE_PROVIDER_CLIENT_SECRET: ""
GOOGLE_PROVIDER_AUTHORIZATION_URL: ""
FIREBASE_SERVICE_ACCOUNT_PROJECT_ID: ""
FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY: ""
FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL: ""
```

``SECRET`` and ``NEXTAUTH_SECRET`` can be created by typing ``openssl rand -base64 32`` into the terminal.
You should get a string value return after the command generates a randomized base64 string. That value is
what you use for both.

> **Note:** Please run this command twice for each value. Do not use the same secret for both.
> **Note:** If you do not have OpenSSL installed on your machine, you can learn more [here](https://www.openssl.org/).

Google Provider key-values (``GOOGLE_PROVIDER_CLIENT_ID``, ``GOOGLE_PROVIDER_CLIENT_SECRET``, ``GOOGLE_PROVIDER_AUTHORIZATION_URL``)
can be generated through a process found [here](https://developers.google.com/identity/protocols/oauth2).

Firebase Service Account key-values (``FIREBASE_SERVICE_ACCOUNT_PROJECT_ID:``, ``FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY``, ``FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL``)
can be generated through a process found [here](https://firebase.google.com/). Essentially, you'd want to create your own ``cloudstore firestore`` and create a 
``service account`` with full access.

Your database rules should look like this:
```
rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {
        match /{document=**} {
            allow read: if request.auth != null;
        }
    }
}
```

> **Note:** Your database instance should not be open to the public!

## Installing Dependencies

In order to run the project and install all dependencies, please ``cd ./src``. 
You should see a ``package-lock.json`` file in the same directory. To install a clean
version of all dependencies, please type ``npm ci`` into terminal.

> **Note:** You should never need ``sudo`` or administrator permissions.

## Running the Project

To run the project, type ``npm run dev`` into terminal. 
You should see the project start to run. It has hot-reloading (updates to your changes)
and provides a neat place to trace errors. A local version of site will be deployed and binded
to localhost (127.0.0.1) w/ port 3000. You can see the site as your developing by
going to ``http://localhost:3000``. 

# Questions

If you have any questions, feel free to reach out to a ``Senior Contributor``, ``Project Manager``, ``Program Manager`` or ``Administrator``. Happy hunting!!