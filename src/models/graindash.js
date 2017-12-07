import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import pathToRegexp from 'path-to-regexp'
import * as weatherService from 'services/weather'
import { getAirConDashboard, getGrainUnmanned, getSmartTempCtrl, getRealtimeTemp, getFireAlarm, getDynamicLinkage, getSecurity } from '../services/grain'

export default modelExtend(model, {
  namespace: 'graindash',
  state: {
    weather: {
      city: '上海',
      temperature: '31',
      name: '晴',
      icon: '//s5.sencdn.com/web/icons/3d_50/2.png',
    },
    gatewayAddr: 1,
    barnNo: 1,
    airConDash: [],
    unmanned: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    dynamiclinkage: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    firealarm: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    realtimetemp: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    security: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    smarttempctrl: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    }
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({pathname}) => {
        console.log('update graindashboard begin---')

        const match = pathToRegexp('/grain_dashboard/:barnNo').exec(pathname)
        console.log('---in graindash models---')
        console.log('match', match)

        // let barnNo = match[1]

          dispatch({ type: 'fetchSmartTempCtrl' })
          dispatch({ type: 'fetchRealtimeTemp' })
          dispatch({ type: 'fetchFireAlarm' })
          dispatch({ type: 'fetchGrainUnmanned' })
          dispatch({ type: 'fetchDynamicLinkage' })
          dispatch({ type: 'fetchSecurity' })

          setInterval(() => {
            dispatch({ type: 'fetchAirConDashboard',
            })
          }, 5000)

      })
    }
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


    * fetchAirConDashboard ({}, { call, put, select }) {

      const gatewayAddr = yield select(state => state.graindash.gatewayAddr)
      console.log('-----gatewayAddr-------:', gatewayAddr)

      const barnNo = yield select(state => state.graindash.barnNo)
      console.log('-----barnNo-------:', barnNo)

      const payload = {
        gatewayAddr: gatewayAddr,
        barnNo: barnNo,
      }

      const airConDash = yield call(getAirConDashboard, payload)

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



    * fetchSmartTempCtrl ({ payload }, { call, put }) {
      const smarttempctrl = yield call(getSmartTempCtrl)
      console.log('smarttempctrl is :', smarttempctrl)
      yield put({
        type: 'updateSmartTempCtrl',
        payload: {
          smarttempctrl: smarttempctrl.smarttempctrl,
        }
      })
    },

    * fetchRealtimeTemp ({ payload }, { call, put }) {
      const realtimetemp = yield call(getRealtimeTemp)
      console.log('realtimetemp is :', realtimetemp)
      yield put({
        type: 'updateRealtimeTemp',
        payload: {
          realtimetemp: realtimetemp.realtimetemp,
        }
      })
    },

    * fetchFireAlarm ({ payload }, { call, put }) {
      const firealarm = yield call(getFireAlarm)
      console.log('firealarm is :', firealarm)
      yield put({
        type: 'updateFireAlarm',
        payload: {
          firealarm: firealarm.firealarm,
        }
      })
    },


    * fetchGrainUnmanned ({ payload }, { call, put }) {
      const unmanned = yield call(getGrainUnmanned)
      console.log('unmanned is :', unmanned)
      yield put({
        type: 'updateGrainUnmanned',
        payload: {
          unmanned: unmanned.unmanned,
        }
      })
    },


    * fetchDynamicLinkage ({ payload }, { call, put }) {
      const dynamiclinkage = yield call(getDynamicLinkage)
      console.log('dynamiclinkage is :', dynamiclinkage)
      yield put({
        type: 'updateDynamicLinkage',
        payload: {
          dynamiclinkage: dynamiclinkage.dynamiclinkage,
        }
      })
    },

    * fetchSecurity ({ payload }, { call, put }) {
      const security = yield call(getSecurity)
      console.log('security is :', security)
      yield put({
        type: 'updateSecurity',
        payload: {
          security: security.security,
        }
      })
    },

  },

  reducers: {


    updateAirConDashboard (state, { payload: { airConDash } }) {
      console.log('reducers airConDash is :', airConDash)

      return { ...state, airConDash: airConDash }
    },


    updateSmartTempCtrl (state, { payload: { smarttempctrl } }) {
      console.log('reducers smarttempctrl are :', smarttempctrl)

      return { ...state, smarttempctrl: smarttempctrl }
    },

    updateRealtimeTemp (state, { payload: { realtimetemp } }) {
      console.log('reducers realtimetemp are :', realtimetemp)

      return { ...state, realtimetemp: realtimetemp }
    },

    updateFireAlarm (state, { payload: { firealarm } }) {
      console.log('reducers firealarm are :', firealarm)

      return { ...state, firealarm: firealarm }
    },


    updateGrainUnmanned (state, { payload: { unmanned } }) {
      console.log('reducers unmanned are :', unmanned)

      return { ...state, unmanned: unmanned }
    },

    updateDynamicLinkage (state, { payload: { dynamiclinkage } }) {
      console.log('reducers dynamiclinkage are :', dynamiclinkage)

      return { ...state, dynamiclinkage: dynamiclinkage }
    },

    updateSecurity (state, { payload: { security } }) {
      console.log('reducers security are :', security)

      return { ...state, security: security }
    },

  },
})
