import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import * as weatherService from 'services/weather'
import { getAirConTemps, getAirConDashboard, getGrainQuote } from '../services/grain'

export default modelExtend(model, {
  namespace: 'graindash',
  state: {
    weather: {
      city: '上海',
      temperature: '31',
      name: '晴',
      icon: '//s5.sencdn.com/web/icons/3d_50/2.png',
    },
    airConDash: [],
    quote: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({pathname}) => {
        if (pathname === '/graindashboard') {
          // dispatch({ type: 'query' })
          console.log('update graindashboard begin---')
          setInterval(() => {
            dispatch({type: 'fetchAirConDashboard'})
            dispatch({type: 'fetchGrainQuote'})

          }, 5000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    }
  },

  effects: {
    * query ({ payload }, { call, put }) {
      const data = yield call(query, parse(payload))
      console.log('dashboard data is:', data)
      yield put({
        type: 'updateState',
        payload: data,
      })
    },

    * fetchAirConDashboard ({ payload }, { call, put }) {
      const airConDash = yield call(getAirConDashboard)
      console.log('airConDash are :', airConDash)
      yield put({
        type: 'updateAirConDashboard',
        payload: {
          airConDash: airConDash.airConDash,
        }
      })
    },

    * fetchGrainQuote ({ payload }, { call, put }) {
      const quote = yield call(getGrainQuote)
      console.log('quote is :', quote)
      yield put({
        type: 'updateAirConDashboard',
        payload: {
          quote: quote.quote,
        }
      })
    },
  },

  reducers: {
    updateAirConDashboard (state, { payload: { airConDash } }) {
      console.log('reducers airConDash are :', airConDash)

      return { ...state, airConDash: airConDash }
    },

    updateGrainQuote (state, { payload: { quote } }) {
      console.log('reducers quote are :', quote)

      return { ...state, quote: quote }
    },
  },
})
