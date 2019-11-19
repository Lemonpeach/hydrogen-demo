import feathersHydrogenAdapter from '@hydrogenjs/redux-hydrogen-feathers'
import createHydrogen from '@hydrogenjs/redux-hydrogen'
import create from '@hydrogenjs/react-redux-hydrogen'

import { feathersClient } from './feathers-client'

const adaptedClient = feathersHydrogenAdapter(feathersClient)
const hydrogen = createHydrogen({ adapter: adaptedClient })
const hydrogenize = create(hydrogen)

const { useFind, useGet, useFirst } = hydrogenize

export {
  useFind,
  useGet,
  useFirst,
  hydrogen
}
