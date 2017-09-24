import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { getAirConTemp, getAirConTemps, getAirConTempRecord, getAirConDashboard } from "../services/grain"
import pathToRegexp from 'path-to-regexp'


Date.prototype.Format = function(format){
  const o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(), //day
    "h+" : this.getHours(), //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3), //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    }
  }
  return format;

}

export default modelExtend(model, {
  namespace: 'aircondetail',
  state: {
    airConRealtimeTemp: [],
    airConTemps: [],
    airConTempRecord: [],
  },
  subscriptions: {
    setup ({ dispatch, history })
    {
      history.listen(({ pathname }) => {
          console.log('update airConRealtimeTemp begin---')
          const match = pathToRegexp('/aircondetail/:nodeAddr').exec(pathname)
          console.log('match:', match)
          if (match) {
          setInterval(() => {
            dispatch({ type: 'fetchAirConRealtimeTemp',
            payload: {
              gateway_addr: '1',
              node_addr: match[1],
            }
            })
            dispatch({ type: 'fetchAirConTemps',
              payload: {
                gateway_addr: '1',
                node_addr: match[1],
            }
            })

            const end_time = new Date().Format("yyyy-MM-dd hh:mm:ss")
            const start_time = new Date(new Date().getTime() - 60*60*1000).Format("yyyy-MM-dd hh:mm:ss")

            console.log('end-time:', end_time)
            console.log('start-time:', start_time)

            dispatch({ type: 'fetchAirConTempRecord',
              payload: {
                gateway_addr: '1',
                node_addr: match[1],
                start_time: start_time,
                end_time: end_time,
              }
            })
          }, 5000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * fetchAirConRealtimeTemp ({ payload }, { call, put }) {
      const airConRealtimeTemp = yield call(getAirConTemp, payload)
      console.log('airConRealtimeTemp', airConRealtimeTemp)
      yield put({
        type: 'updateAirConRealtimeTemp',
        payload: {
          airConRealtimeTemp: airConRealtimeTemp.airConRealtimeTemp,
        }
      })
    },

    * fetchAirConTemps ({payload }, { call, put }) {
      const airConTemps = yield call(getAirConTemps, payload)
      console.log('airConTemps', airConTemps)

      yield put({
        type: 'updateAirConTemps',
        payload: {
          airConTemps: airConTemps.airConTemps,
        }
      })
    },

    * fetchAirConTempRecord ({payload }, { call, put }) {
      const airConTempRecord = yield call(getAirConTempRecord, payload)
      console.log('airConTempRecord', airConTempRecord)
      yield put({
        type: 'updateAirConTempRecord',
        payload: {
          airConTempRecord: airConTempRecord.airConTempRecord,
        }
      })
    },
  },

  reducers: {
    updateAirConRealtimeTemp (state, { payload: {airConRealtimeTemp} }) {
      return {
        ...state, airConRealtimeTemp: airConRealtimeTemp,
      }
    },

    updateAirConTemps (state, { payload: {airConTemps} }) {
      return {
        ...state, airConTemps: airConTemps,
      }
    },

    updateAirConTempRecord (state, { payload: {airConTempRecord} }) {
      return {
        ...state, airConTempRecord: airConTempRecord,
      }
    },
  },
})
