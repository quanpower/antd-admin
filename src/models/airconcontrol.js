/* global window */
import modelExtend from 'dva-model-extend'
import { config } from 'utils'
import { create, remove, update, switchAirconOnOff, switchAirconOnOffAllOneKey, updateBarnLoraNodeDatetime, updateLoraNodeDatetime, oneAirConStartEndTimeUpdate, getAirConControlItems } from 'services/airconcontrol'
import { getNodeAddrByBarnNo, getAllBarns } from 'services/grain'
import * as airConControlService from 'services/airconcontrols'
import queryString from 'query-string'
import { pageModel } from './common'
import {getAllNodes} from "../services/grain";

const { query } = airConControlService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'airconcontrol',

  state: {
    gatewayAddr: 1,
    barnNo: 1,
    barnsOptions: [],
    airConControlItems: [],
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
    isMotion: window.localStorage.getItem(`${prefix}userIsMotion`) === 'true',
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/aircon_control') {
          dispatch({
            type: 'query',
            payload: queryString.parse(location.search),
          })
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

    * fetchBarnsOptions ({ }, { call, put }) {
      const { list } = yield call(getAllBarns)
      const barnsOptions = list
      console.log('-----barnsOptions is------ :', barnsOptions)
      yield put({
        type: 'updateState',
        payload: {
          barnsOptions: barnsOptions,
        }
      })
    },


    * fetchAirConControlItems ({ payload }, { call, put }) {
      const { barnNo } = payload
      console.log('-----barnNo-----!!')
      console.log(barnNo)
      const data = yield call(getAirConControlItems, payload)
      console.log('-----fetchAirConControlItems-------')
      console.log(data)

      if (data.success) {
        yield put({ type: 'updateState', payload: { airConControlItems: data.list } })
      } else {
        throw data
      }
    },


    * query ({ payload = {} }, { call, put }) {
      const data = yield call(query, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },

    * delete ({ payload }, { call, put, select }) {
      const data = yield call(remove, { id: payload })
      const { selectedRowKeys } = yield select(_ => _.user)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: selectedRowKeys.filter(_ => _ !== payload) } })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

    * multiDelete ({ payload }, { call, put }) {
      const data = yield call(usersService.remove, payload)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

    * create ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = yield call(create, payload)
      if (data.success) {
        console.log('i am in!')
        console.log(data)
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },


    * airconOnOff ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = yield call(switchAirconOnOff, payload)
      if (data.success) {
        console.log('switch aircon on/off!')
        console.log(data)
      } else {
        throw data
      }
    },


    * airconOnOffAllOneKey ({ payload }, { call, put }) {
      console.log('payload:', payload)
      const data = yield call(switchAirconOnOffAllOneKey, payload)
      if (data.success) {
        console.log('switch aircon on/off!')
        console.log(data)
      } else {
        throw data
      }
    },


    * updateLoraNode ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = yield call(updateLoraNodeDatetime, payload)
      if (data.success) {
        console.log('update lora node datetime!')
        console.log(data)
      } else {
        throw data
      }
    },


    * updateBarnLoraNode ({ payload }, { call, put }) {
      console.log('payload', payload)


      const data = yield call(updateBarnLoraNodeDatetime, payload)
      if (data.success) {
        console.log('update lora node datetime!')
        console.log(data)
      } else {
        throw data
      }
    },

    * update ({ payload }, { select, call, put }) {
      const id = yield select(({ user }) => user.currentItem.id)
      const newUser = { ...payload, id }
      const data = yield call(update, newUser)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

  },

  reducers: {

    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },

    switchIsMotion (state) {
      window.localStorage.setItem(`${prefix}userIsMotion`, !state.isMotion)
      return { ...state, isMotion: !state.isMotion }
    },

  },
})
