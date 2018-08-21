import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-pack-app'

const api = makeTypes(name, [
  'sendEmail'
])

const local = makeTypes(name, ['phoneCall'])

const both = makeTypes(name, [])

const actions = {
  ...makeActions(both),
  ...makeActions(local),
  ...makeActions(api)
}

const types = {
  ...api,
  ...local,
  ...both
}

export { actions, types }
