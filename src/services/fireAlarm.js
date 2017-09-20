import { request, config } from 'utils'

const { api } = config
const { electricPowerControl } = api

export async function powerControl (params) {
  return request({
    url: electricPowerControl,
    method: 'post',
    data: params,
  })
}

