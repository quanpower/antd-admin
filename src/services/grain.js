import { request, config } from 'utils'
const { api } = config

export async function grainTemp (params) {
  return request({
    // url: 'http://127.0.0.1:8080/api/v1/loranode_temperature/<gateway_addr>/<node_addr>',    url: 'http://127.0.0.1:8080/api/v1/loranode_temperature/<gateway_addr>/<node_addr>',
    url: 'http://127.0.0.1:8080/api/v1/loranode_temperature/1/1',
    // # todo
    data: params,
  })
}

export async function grainBattery (params) {
  return request({
    // url: 'http://127.0.0.1:8080/api/v1/loranode_battery/<gateway_addr>/<node_addr>',
    url: 'http://127.0.0.1:8080/api/v1/loranode_battery/1/1',

    data: params,
  })
}
