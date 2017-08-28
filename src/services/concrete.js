import { request, config } from 'utils'

const { api } = config
const { concTemp } = api

export async function getConcTemps (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/concrete_temperature/1',
    // # todo
    url: concTemp.concat('/1'),
    method: 'get',
    data: params,
  })
}

