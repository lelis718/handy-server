# handy-server
Backend application for Handy Project 


# 1 - Install dependencies
`
cd function
npm install
`

## 2 - Get the service account key
Visit the Service Accounts Page, select your project, create your key and place it at 
functions/service-account-key.json

Reference:
https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances

## 3 - Run the app typing the command in the root of the app
`firebase serve`

## 4 - After update your app, deploy it running the command below in the root of the app
`firebase deploy`