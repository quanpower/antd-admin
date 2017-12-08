import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import * as weatherService from 'services/weather'
import { getBarns } from "../services/grain"

export default modelExtend(model, {
  namespace: 'grain',
  state: {
    barns: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        // if (pathname === '/grain' || pathname === '/') {
        if (pathname === '/grain') {
          dispatch({ type: 'fetchBarns' })
          console.log('update storehouses begin---')
          setInterval(() => {
            dispatch({ type: 'fetchBarns' })
          }, 60000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {

    * fetchBarns ( { payload }, { call, put }) {
      const barns = yield call(getBarns)
      console.log('barns are :', barns)
      yield put({
        type: 'updateBarns',
        payload: {
          barns: barns.barns,
        }
      })
    },
  },

  reducers: {
    updateBarns (state, { payload: {barns} }) {
      console.log('reducers barns are :', barns)

      return { ...state, barns: barns }
    },
  },
})
