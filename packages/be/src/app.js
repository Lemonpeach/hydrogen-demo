const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
var cors = require('cors');
const socketio = require('@feathersjs/socketio');

const memory = require('feathers-memory');

const app = express(feathers());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.configure(socketio());

app.use('/todo-list', memory({
  store: {
    'e67a4643-371d-40fa-8c38-39e422bb087c': {
      id: 'e67a4643-371d-40fa-8c38-39e422bb087c',
      title: 'shovel driveway'
    },
    '2aaeb1e6-d129-4e78-a39d-37af219c8471c': {
      id: '2aaeb1e6-d129-4e78-a39d-37af219c8471',
      title: 'bathe the mean cat'
    },
    '7ed6f748-a92f-4c77-9e87-c49ba99f5bd9': {
      id: '7ed6f748-a92f-4c77-9e87-c49ba99f5bd9',
      title: 'cancel gym membership'
    },
    '06b441ac-2321-4849-bd94-6ab7b4d37525': {
      id: '06b441ac-2321-4849-bd94-6ab7b4d37525',
      title: 'call grandma'
    }
  }
}));

app.use(express.errorHandler());

const port = 3030;

app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`)
});