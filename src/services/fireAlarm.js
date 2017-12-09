import { request, config } from 'utils'

const { api } = config
const { electricPowerControl, fireAlarmItems } = api

export async function powerControl (params) {
  return request({
    url: electricPowerControl,
    method: 'post',
    data: params,
  })
}



export async function getFireAlarmItems (params) {
  return request({
    url: fireAlarmItems,
    method: 'post',
    data: params,
  })
}
