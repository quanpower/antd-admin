import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { model } from 'models/common'
import { powerControl } from 'services/fireAlarm'
import pathToRegexp from 'path-to-regexp'

export default modelExtend(model, {
  namespace: 'airconStartEndTime',
  state: {
  switch: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/setting/airconditoner_setting/start_end_time/:barnNo').exec(pathname)
        if (match) {
          console.log('---update airconditoner_setting/start_end_time begin---')
        }
        else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * updateStartEndTime ({ payload }, { call, put }) {
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
