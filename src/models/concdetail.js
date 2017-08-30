import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { getConcTemp, getConcTemps, getConcTempRecord, getConcDashboard } from "../services/concrete"

export default modelExtend(model, {
  namespace: 'concdetail',
  state: {
    concRealtimeTemp: [],
    concTemps: [],
    concTempRecord: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/concdetail') {
          console.log('update concRealtimeTemp begin---')
          setInterval(() => {
            dispatch({ type: 'fetchConcRealtimeTemp' })
            dispatch({ type: 'fetchConcTemps' })
            dispatch({ type: 'fetchConcTempRecord' })
          }, 5000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * fetchConcRealtimeTemp ({ payload }, { call, put }) {
      const concRealtimeTemp = yield call(getConcTemp, {})
      console.log('concRealtimeTemp', concRealtimeTemp)
      yield put({
        type: 'updateConcRealtimeTemp',
        payload: {
          concRealtimeTemp: concRealtimeTemp.concRealtimeTemp,
        }
      })
    },

    * fetchConcTemps ({payload }, { call, put }) {
      const concTemps = yield call(getConcTemps, {})
      console.log('concTemps', concTemps)

      yield put({
        type: 'updateConcTemps',
        payload: {
          concTemps: concTemps.concTemps,
        }
      })
    },

    * fetchConcTempRecord ({payload }, { call, put }) {
      const concTempRecord = yield call(getConcTempRecord, {})
      console.log('concTempRecord', concTempRecord)
      yield put({
        type: 'updateConcTempRecord',
        payload: {
          concTempRecord: concTempRecord.concTempRecord,
        }
      })
    },
  },

  reducers: {
    updateConcRealtimeTemp (state, { payload: {concRealtimeTemp} }) {
      return {
        ...state, concRealtimeTemp: concRealtimeTemp,
      }
    },

    updateConcTemps (state, { payload: {concTemps} }) {
      return {
        ...state, concTemps: concTemps,
      }
    },

    updateConcTempRecord (state, { payload: {concTempRecord} }) {
      return {
        ...state, concTempRecord: concTempRecord,
      }
    },
  },
})
