import createHydrogen from '@hydrogenjs/redux-hydrogen';
import feathersHydrogen from '@hydrogenjs/redux-hydrogen-feathers';
import create from '@hydrogenjs/react-redux-hydrogen';

import { feathersClient } from './feathers-client';

const hydrogen = createHydrogen({ adapter: feathersHydrogen(feathersClient) });
const hydrogenize = create(hydrogen);

const { useFind, useFirst, useGet } = hydrogenize;

export {
  useFind,
  useFirst,
  useGet,
  hydrogen,
  feathersClient as client
};
