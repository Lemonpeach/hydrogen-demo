import feathers from '@feathersjs/client'
import rest from '@feathersjs/rest-client'

const API = 'http://localhost:3030'

export const client = feathers()
  .configure(rest(API).fetch(window.fetch))
