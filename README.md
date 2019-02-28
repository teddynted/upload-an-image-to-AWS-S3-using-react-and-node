# Upload an image to AWS S3 using ReactJ, Redux and NodeJS
In this project we learn to upload an image to AWS S3 using ReactJS/Redux and NodeJS.

_Amazon S3 (Simple Storage Service) provides storage service through web services interfaces like REST. You can store any object in S3 including images, videos, files, etc. Objects are organized into buckets, and identified within each bucket by a unique, user-assigned key._ - Serverless Stack

## Pre-requisites

- AWS account
- Knowledge NodeJS/Express
- Basic knowledge of React / Redux

## Server Side Setup

Let's start by off by initialising a package.json and installing packages that are essential to getting our node/express up and running.

npm init -y
npm install express express-fileupload dotenv aws-sdk cors --save

- express-fileupload is an express middleware for uploading files, it's compatible with express 4.
- axios, this package will help us with http requests between the client and server.
- aws-sdk is a JavaScript SDK that enable us to build libraries and applications that use AWS services, S3 in this case.
- dotenv is a module that will help us with loading environment variables(AWS credentials) from .env file we will create shortly.

## Client Side Setup

npx create-react-app client
npm install axios bootstrap font-awesome redux redux-saga --save