const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'Smart Admin',
  prefix: 'antdAdmin',
  footerText: '',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV2}/user/login`,
    userLogout: `${APIV2}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV2}/user/:id`,
    dashboard: `${APIV1}/dashboard`,


    menus: `${APIV2}/menus`,

    loraTemperature: `${APIV2}/loranode_temperature`,
    loraTemperatures: `${APIV2}/loranode_temperatures`,
    loraTemperatureRecord: `${APIV2}/loranode_temperature_record`,

    loraBat: `${APIV2}/loranode_battery`,
    barns: `${APIV2}/barns`,
    allBarns: `${APIV2}/all_barns`,
    allNodes: `${APIV2}/all_nodes`,
    grainSmartTempCtrl: `${APIV2}/grain_smart_temperature_control`,
    grainRealtimeTemp: `${APIV2}/grain_realtime_temperature`,
    grainFireAlarm: `${APIV2}/grain_fire_alarm`,
    grainUnmanned: `${APIV2}/grain_unmanned`,
    grainDynamicLinkage: `${APIV2}/grain_dynamic_linkage`,
    grainSecurity: `${APIV2}/grain_security`,
    grainHistory: `${APIV2}/grain_history`,

    concTemp: `${APIV2}/concrete_temperature`,
    concTemps: `${APIV2}/concrete_temperatures`,
    concTempRecord: `${APIV2}/concrete_temperature_record`,
    concDashboard: `${APIV2}/concrete_dashboard`,

    airConTemp: `${APIV2}/air-conditioner_temperature`,
    airConTemps: `${APIV2}/air-conditioner_temperatures`,
    airConTempRecord: `${APIV2}/air-conditioner_temperature_record`,
    airConDashboard: `${APIV2}/air-conditioner_dashboard`,
    airConControls: `${APIV2}/air-conditioner_controls`,
    airConControl: `${APIV2}/air-conditioner_control`,
    airConControlOnOff: `${APIV2}/air-conditioner_control_on_off`,
    electricPowerControl: `${APIV2}/electric_power_control`,
    tianshuoOnOffControl: `${APIV2}/tianshuo_on_off_control`,
    loranodeDatetimeUpdate: `${APIV2}/lora_node_datetime_update`,
    oneAirConStartEndTimeUpdate: `${APIV2}/one_air-conditioner_start_end_time_update`,
    barnLoranodeDatetimeUpdate: `${APIV2}/barn_lora_node_datetime_update`,
    nodeAddrByBarnNo: `${APIV2}/node_address_by_barn_no`,
    airconOnOffAllOneKey: `${APIV2}/air-conditioner_on_off_all_one_key`,
    airConControlItems: `${APIV2}/air-conditioner_control_items`,
    electricPowerItems: `${APIV2}/electric_power_control_items`,

  },
}
