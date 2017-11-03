import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { model } from 'models/common'
import { updateOneAirConStartEndTime } from 'services/airconcontrol'
import pathToRegexp from 'path-to-regexp'

export default modelExtend(model, {
  namespace: 'airconStartEndTime',
  state: {
  startTime: '08:00',
  endTime: '18:00',
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
    * getStartTime ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = payload
      console.log('data is:', data)
      yield put({
        type: 'updateStartTime',
        payload: {
          startTime: data.startTime,
        }
      })

    },

    * getEndTime ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = payload
      console.log('data is:', data)
      yield put({
        type: 'updateEndTime',
        payload: {
          endTime: data.endTime,
        }
      })

    },

    * updateOneStartEndTime ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = yield call(updateOneAirConStartEndTime, payload)
      console.log('data is:', data)
      yield put({
        type: 'updateEndTime',
        payload: {
          endTime: data.endTime,
        }
      })

    },

  },

  reducers: {
    updateStartTime (state, { payload: { startTime } }) {
      return {
        ...state, startTime: startTime,
      }
    },

    updateEndTime (state, { payload: { endTime } }) {
      return {
        ...state, endTime: endTime,
      }
    },

    updateAirConTempRecord (state, { payload: {airConTempRecord} }) {
      return {
        ...state, airConTempRecord: airConTempRecord,
      }
    },
  },
})
