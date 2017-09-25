import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { switchTianshuoOnOff } from 'services/tianshuoOnOff'
import pathToRegexp from 'path-to-regexp'

export default modelExtend(model, {
  namespace: 'tianshuoOnOff',
  state: {
  switch: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/tianshuo_on_off').exec(pathname)
        if (match) {
          console.log('switch tianshuo on/off begin---')
        }
        else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * updateTianshuoOnOff ({ payload }, { call, put }) {
      console.log('payload', payload)
      const data = yield call(switchTianshuoOnOff, payload)
      if (data.success) {
        console.log(data)
      } else {
        throw data
      }
    },

  },


})
