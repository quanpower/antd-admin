import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import pathToRegexp from 'path-to-regexp'
import { getNodeAddrByBarnNo, getAllBarns, getAirConDashboard, getAirconBlockItems } from 'services/grain'


export default modelExtend(model, {
  namespace: 'graindash',
  state: {
    gatewayAddr: 1,
    barnNo: 1,
    barnsOptions: [],

    airConDash: [],

    airconBlockItems: ['a','b','c'],

  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({pathname}) => {
        console.log('update graindashboard begin---')

        const match = pathToRegexp('/grain_dashboard/:barnNo').exec(pathname)
        console.log('---in graindash models---')
        console.log('match', match)

        const barnNo = match[1]
        console.log('match barnNo', barnNo)

        // dispatch({
        //   type: 'graindash/fetchGatewayAddr',
        //   payload: {
        //     gatewayAddr: value[0],
        //   },
        // })

        dispatch({
          type: 'fetchBarnNo',
          payload: {
            barnNo: barnNo,
          },
        })

        // dispatch({
        //   type: 'fetchAirConControlItems',
        //   payload: {
        //     barnNo: barnNo,
        //   },
        // })

        dispatch({ 
          type: 'fetchAirConDashboard',
          payload: {
            gatewayAddr: 1,
            barnNo: barnNo,
          }
        })

        dispatch({ 
          type: 'fetchAirconBlockItems',
          payload: {
            barnNo: barnNo,
          }
         })


        setInterval(() => {
          dispatch({ type: 'fetchAirConDashboard',
          })

        dispatch({ 
          type: 'fetchAirconBlockItems',
          payload: {
            barnNo: barnNo,
          }
         })
          
        }, 30000)

      })
    }
  },

  effects: {

    * query ({ payload }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
    },


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
      console.log('************airconcontrol user*************:', user)
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


    * fetchAirConDashboard ({payload}, { call, put, select }) {

      const gatewayAddr = yield select(state => state.graindash.gatewayAddr)
      console.log('-----gatewayAddr-------:', gatewayAddr)

      const barnNo = yield select(state => state.graindash.barnNo)
      console.log('-----barnNo-------:', barnNo)
      
      const payload1 = payload || {
        gatewayAddr: gatewayAddr,
        barnNo: barnNo,
      }

      console.log('payload1 is:', payload1)

      const airConDash = yield call(getAirConDashboard, payload1)

      console.log('airConDash is :', airConDash)
      yield put({
        type: 'updateAirConDashboard',
        payload: {
          airConDash: airConDash.airConDash,
        }
      })
    },


    * fetchBarnNo ({ payload }, { put }) {
      const { barnNo } = payload

      console.log('-----payload is------ :', payload)
      console.log('-----barnNo is------ :', barnNo)
      yield put({
        type: 'updateState',
        payload: {
          barnNo: barnNo,
        }
      })
    },



    * fetchAirconBlockItems ({ payload }, { call, put }) {
      const airconBlockItems = yield call(getAirconBlockItems, payload)
      console.log('airconBlockItems is :', airconBlockItems)
      yield put({
        type: 'updateState',
        payload: {
          airconBlockItems: airconBlockItems.airconBlockItems,
        }
      })
    },

  },

  reducers: {

    updateAirConDashboard (state, { payload: { airConDash } }) {
      console.log('reducers airConDash is :', airConDash)

      return { ...state, airConDash: airConDash }
    },

  },
})
