import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { powerControl, getElectricPowerItems } from 'services/fireAlarm'
import { getNodeAddrByBarnNo, getAllBarns } from 'services/grain'
import pathToRegexp from 'path-to-regexp'

export default modelExtend(model, {
  namespace: 'fireAlarm',
  state: {
    gatewayAddr: 1,
    barnNo: 1,
    barnsOptions: [],
    electricPowerItems: [],

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

        dispatch({ type: 'fetchBarnsOptions',
        })
      })
    },
  },


  effects: {

    * fetchGatewayAddr ({ payload }, { put }) {
      const { gatewayAddr } = payload
      yield put({
        type: 'updateState',
        payload: {
          gatewayAddr: gatewayAddr,
        }
      })
    },


    * fetchBarnNo ({ payload }, { put }) {
      const { barnNo } = payload
      console.log('-----barnNo-----!!')
      console.log(barnNo)
      yield put({
        type: 'updateState',
        payload: {
          barnNo: barnNo,
        }
      })
    },

    * fetchBarnsOptions ({}, { select, call, put }) {
      const user = yield select(state => state.app.user)
      console.log('************fireAlarm user*************:', user)
      const payload = {
        userID: user.id,
        username: user.username,
      }
      const { list } = yield call(getAllBarns, payload)
      const barnsOptions = list
      console.log('-----barnsOptions is------ :', barnsOptions)
      yield put({
        type: 'updateState',
        payload: {
          barnsOptions: barnsOptions,
        }
      })
    },


    * fetchElectricPowerItems ({ payload }, { call, put }) {
      const { barnNo } = payload
      console.log('-----barnNo-----!!')
      console.log(barnNo)
      const data = yield call(getElectricPowerItems, payload)
      console.log('-----fetchAirConControlItems-------')
      console.log(data)

      if (data.success) {
        yield put({ type: 'updateState', payload: { electricPowerItems: data.list } })
      } else {
        throw data
      }
    },

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
