/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// check our node package on github
// https://github.com/belvo-finance/belvo-js
var belvo = require('belvo').default;

var client = new belvo(
  '3fa922fb-40ba-4a80-a32e-6522b32f54e5',
  '0i8127-*wzN1ZGNl89*Q80xYCR_JCob8k5IRn99MpZz37GNAYBZkURWe2Y4zax4_',
  'https://sandbox.belvo.com',
);

client.connect()
  .then(function () {
        client.widgetToken.create()
      .then((response) => {
      res.json(response);
        })
      .catch((error) => {
      res.status(500).send({
        message: error.message
      });
    });
});


// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
