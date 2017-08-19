import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import * as weatherService from 'services/weather'
import { loraTemp, loraTemps, loraBattery } from "../services/grain"
import key from 'keymaster';

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    weather: {
      city: '深圳',
      temperature: '30',
      name: '晴',
      icon: '//s5.sencdn.com/web/icons/3d_50/2.png',
    },
    temps: [],
    quote: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    numbers: [],
    recentSales: [],
    comments: [],
    completed: [],
    browser: [],
    cpu: {},
    user: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    tempRecordList: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard' || pathname === '/') {
          dispatch({ type: 'query' })
          dispatch({ type: 'queryWeather' })
          console.log('update numbers begin---')
          setInterval(() => {
            dispatch({ type: 'fetchNumbers' })
            dispatch({ type: 'fetchTemps' })
            dispatch({ type: 'fetchTempRecord' })
          }, 60000);
        } else {
          console.log('we are at:', pathname)
        }
      })
    },

    // keyboardWatcher({ dispatch }) {
    //   key('⌘+up, ctrl+up', () => {
    //     console.log('key down!');
    //     dispatch({type:'query'});
    //     dispatch({ type: 'queryWeather' })
    //   });
    // },
  },


  effects: {
    * query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
    },

    * queryWeather ({
      payload = {},
    }, { call, put }) {
      payload.location = 'shenzhen'
      const result = yield call(weatherService.query, payload)
      const { success } = result
      if (success) {
        const data = result.results[0]
        const weather = {
          city: data.location.name,
          temperature: data.now.temperature,
          name: data.now.text,
          icon: `//s5.sencdn.com/web/icons/3d_50/${data.now.code}.png`,
        }
        yield put({
          type: 'updateState',
          payload: {
            weather,
          },
        })
      }
    },

    * fetchNumbers ( { payload }, { call, put }) {
      const temp = yield call(loraTemp, {})
      yield put({
        type: 'updateNumbers',
        payload: {
          numbers: temp.numbers,
        }
      });
    },

    * fetchTemps ( {payload }, { call, put }) {
      const temps = yield call(loraTemps, {})
      yield put({
        type: 'updateTemps',
        payload: {
          temps: temps.temps,
        }
      });
    },

    * fetchTempRecord ( {payload }, { call, put }) {
      const temps = yield call(loraTemps, {})
      console.log(temps)
      yield put({
        type: 'updateTempRecord',
        payload: {
          tempRecord: temps.temps,
        }
      });
    },


  },

  reducers: {
    updateNumbers (state, { payload: {numbers} }) {
      return {
        ...state, numbers: numbers,
      }
    },

    updateTemps (state, { payload: {temps} }) {
      return {
        ...state, temps: temps,
      }
    },

    updateTempRecord (state, { payload: {tempRecord} }) {
      return {
        ...state, tempRecord: tempRecord,
      }
    },
  },
})
