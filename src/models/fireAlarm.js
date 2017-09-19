import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { powerControl } from "../services/fireAlarm"

export default modelExtend(model, {
  namespace: 'fireAlarm',
  state: {
  switch: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/fire_alarm') {
          console.log('update fire alarm begin---')
          // dispatch({ type: 'switchElectricPower' })
        }
        else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * switchElectricPower ({ payload }, { call, put }) {
      const data = yield call(powerControl, payload)
      if (data.success) {
        console.log('i am in effects!')
        console.log(data)
      } else {
        throw data
      }
    },

  },


})
