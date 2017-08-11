import { request, config } from 'utils'

const { api } = config
const { lora_temp, lora_bat } = api

export async function grainTemp (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_temperature/1/1',
    // # todo
    url: lora_temp,
    method: 'get',
    data: params,
  })
}

export async function grainBattery (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: lora_bat,
    method: 'get',
    data: params,
  })
}
