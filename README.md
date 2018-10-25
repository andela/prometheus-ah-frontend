[![CircleCI](https://circleci.com/gh/andela/prometheus-ah-frontend.svg?style=svg)](https://circleci.com/gh/andela/prometheus-ah-frontend) [![Test Coverage](https://api.codeclimate.com/v1/badges/36fda3e6b4b2f6ff0341/test_coverage)](https://codeclimate.com/github/andela/prometheus-ah-frontend/test_coverage) [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

Authors Haven - A Social platform for the creative at heart.


## Vision
Create a community of like minded authors to foster inspiration and innovation
by leveraging the modern web.

### The application can be found [**here**](https://prometheus-ah-frontend-staging.herokuapp.com/)


## Getting Started

### Prerequisites
* Ensure [**Node JS**](https://nodejs.org/en/) is installed.
* Clone the [**repository here**](https://github.com/andela/prometheus-ah-frontend.git)
* Navigate to the project directory `cd  prometheus-ah-frontend`
* Run `npm install` on the terminal to install dependecies

### Starting the app
* Run `npm run start:dev` on the terminal to start the app on development mode

### Testing
* Run `npm run test:jest` on the terminal

## Features

Authors Haven consists of the following features:

### Authentication
* It uses JSON Web Token (JWT) for authentication.
* Token is generated on user signup/login.

### Unauthenticated Users
* Unauthenticated users can read the articles on the application.
* Unauthenticated users can search for articles and authors.
* Unauthenticated users can share articles across various channels like facebook, twitter and email.

### Authenticated Users
* Authenticated users can create articles.
* Authenticated users can view their profile.
* Authenticated users can like an article.
* Authenticated users can bookmark an article.
* Authenticated users can like/unlike an article.
* Authenticated users can make comment on an article.
* Authenticated users can reply to a comment.
* Authenticated users can like/unlike a comment.
* Authenticated users can follow an author(s).
