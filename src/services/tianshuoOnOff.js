import { request, config } from 'utils'

const { api } = config
const { tianshuoOnOffControl } = api

export async function switchTianshuoOnOff (params) {
  return request({
    url: tianshuoOnOffControl,
    method: 'post',
    data: params,
  })
}

