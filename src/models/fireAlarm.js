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
        const match = pathToRegexp('/fire_alarm/:barnNo').exec(pathname)
        console.log('---in fire_alarm models---')
        console.log('match', match)

        const barnNo = match[1]
        console.log('match barnNo', barnNo)


        dispatch({
          type: 'fetchBarnNo',
          payload: {
            barnNo: barnNo,
          },
        })

        dispatch({ type: 'fetchBarnsOptions',
        })

      // dispatch({
      //   type: 'airconcontrol/fetchGatewayAddr',
      //   payload: {
      //     gatewayAddr: value[0],
      //   },
      // })

        dispatch({
          type: 'fetchElectricPowerItems',
          payload: {
            barnNo: barnNo,
          },
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
