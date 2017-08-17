import { request, config } from 'utils'

const { api } = config
const { loraTemperature, loraTemperatures, loraTemperatureRecord, loraBat } = api

export async function loraTemp (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_temperature/1/1',
    // # todo
    url: loraTemperature.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function loraTemps (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_temperatures/1/1',
    // # todo
    url: loraTemperatures.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function loraTempRecord (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_temperature_record/1/1/?/?',
    // # todo
    url: loraTemperatureRecord,
    method: 'post',
    data: params,
  })
}

export async function loraBattery (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: loraBat.concat('/1/1'),
    method: 'get',
    data: params,
  })
}
