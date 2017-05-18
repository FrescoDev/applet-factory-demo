# applet-factory

The applet-factory API

### Prerequisities

* node/npm
* nodemon

### Install and Run Locally

1. Clone the repo
2. Run: ```npm install``` to install project dependencies
3. Run: ```npm run build``` to transpile and build the application
4. Run: ```npm start``` to kickstart and run the server


## Running the Tests

- ```npm run test```

## Request & Response Examples

### API Resources

  - [GET /meta](#get-meta)

### GET /meta

Example: http:/{url}/meta

Response body:

    {
        "description": "applet-factory",
        "status": "ok"
    }