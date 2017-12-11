import { request, config } from 'utils'

const { api } = config
const { electricPowerControl, electricPowerItems } = api

export async function powerControl (params) {
  return request({
    url: electricPowerControl,
    method: 'post',
    data: params,
  })
}



export async function getElectricPowerItems (params) {
  return request({
    url: electricPowerItems,
    method: 'post',
    data: params,
  })
}
