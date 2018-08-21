import { makeProcessor } from '@gp-technical/stack-pack-api'
import { sleep } from '@gp-technical/stack-pack-util'

const processor = async action => {
  var { types, type, data } = action

  switch (type) {
    case types.headerSendEmail:
      await sleep(2000)
      return {
        sended: true
      }
  }
}

export default makeProcessor(processor)
