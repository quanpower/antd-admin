import { request, config } from 'utils'

const { api } = config
const { airConControl, airConControlOnOff, loranodeDatetimeUpdate, airconOnOffAllOneKey, barnLoranodeDatetimeUpdate } = api

export async function query (params) {
  return request({
    url: airConControl,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: airConControl,
    method: 'post',
    data: params,
  })
}


export async function switchAirconOnOff (params) {
  return request({
    url: airConControlOnOff,
    method: 'post',
    data: params,
  })
}


export async function switchAirconOnOffAllOneKey (params) {
  return request({
    url: airconOnOffAllOneKey,
    method: 'post',
    data: params,
  })
}


export async function updateLoraNodeDatetime (params) {
  return request({
    url: loranodeDatetimeUpdate,
    method: 'post',
    data: params,
  })
}


export async function updateBarnLoraNodeDatetime (params) {
  return request({
    url: barnLoranodeDatetimeUpdate,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: airConControl,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: airConControl,
    method: 'patch',
    data: params,
  })
}
