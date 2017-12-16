import { request, config } from 'utils'

const { api } = config
const { barns, allBarns, allNodes, airConTemp, airConTemps, airConTempRecord, airConDashboard, 
   grainHistory, nodeAddrByBarnNo, alarmStatus, airconBlockItems } = api


export async function getBarns (params) {
  return request({
    url: barns,
    method: 'get',
    data: params,
  })
}


export async function getAllBarns (params) {
  return request({
    url: allBarns,
    method: 'post',
    data: params,
  })
}


export async function getAllNodes (params) {
  return request({
    url: allNodes,
    method: 'get',
    data: params,
  })
}


export async function getAirConTemp (params) {
  return request({
    url: airConTemp,
    method: 'get',
    data: params,
  })
}


export async function getAirConTemps (params) {
  return request({
    url: airConTemps,
    method: 'get',
    data: params,
  })
}


export async function getAirConTempRecord (params) {
  return request({
    url: airConTempRecord,
    method: 'get',
    data: params,
  })
}


export async function getAirConDashboard (params) {
  return request({
    url: airConDashboard,
    method: 'get',
    data: params,
  })
}



export async function getGrainHistory (params) {
  return request({
    url: grainHistory,
    method: 'get',
    data: params,
  })
}


export async function getNodeAddrByBarnNo (params) {
  return request({
    url: nodeAddrByBarnNo,
    method: 'get',
    data: params,
  })
}


export async function getAlarmStatus (params) {
  return request({
    url: alarmStatus,
    method: 'get',
    data: params,
  })
}


export async function getAirconBlockItems (params) {
  return request({
    url: airconBlockItems,
    method: 'post',
    data: params,
  })
}
