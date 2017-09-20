import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { powerControl } from 'services/fireAlarm'
import pathToRegexp from 'path-to-regexp'

export default modelExtend(model, {
  namespace: 'fireAlarm',
  state: {
  switch: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/fire_alarm/:powerNo').exec(pathname)
        if (match) {
          console.log('update fire alarm begin---')
        }
        else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * switchElectricPower ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = yield call(powerControl, payload)
      if (data.success) {
        console.log(data)
      } else {
        throw data
      }
    },

  },


})
