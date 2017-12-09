import { request, config } from 'utils'

const { api } = config
const { loraTemperature, loraTemperatures, loraTemperatureRecord, loraBat, barns, allBarns, allNodes, grainUnmanned,
  airConTemp, airConTemps, airConTempRecord, airConDashboard, grainSmartTempCtrl, grainRealtimeTemp, grainFireAlarm,
  grainDynamicLinkage, grainSecurity, grainHistory, nodeAddrByBarnNo } = api

export async function loraTemp (params) {
  return request({
    // # todo
    url: loraTemperature.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function loraTemps (params) {
  return request({
    // # todo
    url: loraTemperatures.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function loraTempRecord (params) {
  return request({
    // # todo
    url: loraTemperatureRecord,
    method: 'post',
    data: params,
  })
}


export async function loraBattery (params) {
  return request({
    url: loraBat.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


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
    method: 'get',
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


export async function getGrainUnmanned (params) {
  return request({
    url: grainUnmanned.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function getSmartTempCtrl (params) {
  return request({
    url: grainSmartTempCtrl.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getRealtimeTemp (params) {
  return request({
    url: grainRealtimeTemp.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getFireAlarm (params) {
  return request({
    url: grainFireAlarm.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getDynamicLinkage (params) {
  return request({
    url: grainDynamicLinkage.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getSecurity (params) {
  return request({
    url: grainSecurity.concat('/1/1'),
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
