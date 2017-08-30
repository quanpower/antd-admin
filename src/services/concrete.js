import { request, config } from 'utils'

const { api } = config
const { concTemp, concTemps, concTempRecord, concDashboard } = api

export async function getConcTemp (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/concrete_temperature/1',
    // # todo
    url: concTemp.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getConcTemps (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/concrete_temperature/1',
    // # todo
    url: concTemps.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getConcTempRecord (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/concrete_temperature/1',
    // # todo
    url: concTempRecord.concat('/1/1/2017-8-20 00:00:00/2017-8-20 12:00:00'),
    method: 'get',
    data: params,
  })
}

export async function getConcDashboard (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/concrete_temperature/1',
    // # todo
    url: concDashboard,
    method: 'get',
    data: params,
  })
}
