# Applet Factory Concept Demo

### Background

To create a Trigger and Action based application which allows the building of Applets to perform an Action based on the state of a Trigger.

Two use cases are defined below as examples of Trigger and Action pairings (Applets). We should be able to build an Applet from any Trigger and Action pairing.
 
1. When leaving work I want to send a text message to my SO to let them know I'll be home shortly.
2. Every Monday at 9pm I want to send an email to myself to remind me to put the bins out.

### Solution

#### System components:

* Applet Factory API

-A simple API with two endpoints GET /meta - which allows for simple health check of the server and POST /specification which allows for the creation of applets (a trigger and action pairing with specified settings).

-Each successful post request to the /specification endpoint allows persists an "applet specification" into an in memory redis cache which allows applet specifications to be retrieved by some ID.

### POST /specification

Example: http:/{url}/specification

Request body:

    {  "userDetails" : {
	"userId" : "jane"
	},
   "applet":{  
      "id":"appletid",
      "trigger" : {
      	"id" : "triggerId",
      	"type" : "leftWork"
      },
      "action" : {
      	"id" : "actionId",
      	"type" : "sendSms"
      },
      "settings" : {
      	"smsAddress" : "07817856708",
      	"smsContent" : "I'll be back soon!"
      }
   }
}

Response body:

    {
        "res": "ok"
    }

* Applet Factory Web Application
* Local Trigger simulator

### Prerequisities

* node/npm

### Install and Run Each project Locally

1. Clone the repo
2. Run: ```npm install``` to install project dependencies
3. Run: ```npm start``` to kickstart and run the applet factory API
4. Run: ```npm start:local-trigger``` to kickstart and run the local trigger simulator
5. Change to the applet-factory.interface's directory Run: ```npm run start``` to kickstart and run the applet factory interface

## Running the Tests

- ```npm run test```

## Test the app via POSTMAN

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/feee6893f79e54fd8315)