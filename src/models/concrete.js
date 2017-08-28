import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import * as weatherService from 'services/weather'
import { getConcTemps } from "../services/concrete"

export default modelExtend(model, {
  namespace: 'concrete',
  state: {
    concTemps: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({pathname}) => {
        if (pathname === '/concrete') {
          console.log('update ConcTemps begin---')
          setInterval(() => {
            dispatch({type: 'fetchConcTemps'})
          }, 5000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    }
  },


  effects: {
    * fetchConcTemps ( { payload }, { call, put }) {
      const concTemps = yield call(getConcTemps)
      console.log('concTemps are :', concTemps)
      yield put({
        type: 'updateConcTemps',
        payload: {
          concTemps: concTemps.concTemps,
        }
      })
    },
  },

  reducers: {
    updateConcTemps (state, { payload: {concTemps} }) {
      console.log('reducers concTemps are :', concTemps)

      return { ...state, concTemps: concTemps }
    },
  },
})
