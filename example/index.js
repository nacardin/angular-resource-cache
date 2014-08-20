var express = require('express')
  serveStatic = require('serve-static'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  mockgoose = require('mockgoose'),
  restful = require('node-restful');

mockgoose(mongoose);

var app = express();

app.use(bodyParser.json());
app.use(express.query());

mongoose.connect("mongodb://localhost/resources");

var resourceSchema = mongoose.Schema({
  title: 'string',
  year: 'number'
});

var ResourceModel = mongoose.model('resource', resourceSchema);


var resourceModelInstance = new ResourceModel ({
  title: 'resource1',
  year: 2001
});
resourceModelInstance.save(function (err) {if (err) console.log ('Error on save!')});


var Resource = app.resource = restful.model('resource', resourceSchema)
  .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/resources');

app.use(serveStatic('static'));


app.listen(8080);