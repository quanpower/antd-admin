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
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,


    menus: `${APIV1}/menus`,

    loraTemperature: `${APIV1}/loranode_temperature`,
    loraTemperatures: `${APIV1}/loranode_temperatures`,
    loraTemperatureRecord: `${APIV1}/loranode_temperature_record`,

    loraBat: `${APIV1}/loranode_battery`,
    barns: `${APIV1}/barns`,
    allBarns: `${APIV1}/all_barns`,
    allNodes: `${APIV1}/all_nodes`,
    grainSmartTempCtrl: `${APIV1}/grain_smart_temperature_control`,
    grainRealtimeTemp: `${APIV1}/grain_realtime_temperature`,
    grainFireAlarm: `${APIV1}/grain_fire_alarm`,
    grainUnmanned: `${APIV1}/grain_unmanned`,
    grainDynamicLinkage: `${APIV1}/grain_dynamic_linkage`,
    grainSecurity: `${APIV1}/grain_security`,
    grainHistory: `${APIV1}/grain_history`,

    concTemp: `${APIV1}/concrete_temperature`,
    concTemps: `${APIV1}/concrete_temperatures`,
    concTempRecord: `${APIV1}/concrete_temperature_record`,
    concDashboard: `${APIV1}/concrete_dashboard`,

    airConTemp: `${APIV1}/air-conditioner_temperature`,
    airConTemps: `${APIV1}/air-conditioner_temperatures`,
    airConTempRecord: `${APIV1}/air-conditioner_temperature_record`,
    airConDashboard: `${APIV1}/air-conditioner_dashboard`,
    airConControls: `${APIV1}/air-conditioner_controls`,
    airConControl: `${APIV1}/air-conditioner_control`,
    airConControlOnOff: `${APIV1}/air-conditioner_control_on_off`,
    electricPowerControl: `${APIV1}/electric_power_control`,
    tianshuoOnOffControl: `${APIV1}/tianshuo_on_off_control`,
    loranodeDatetimeUpdate: `${APIV1}/lora_node_datetime_update`,
    oneAirConStartEndTimeUpdate: `${APIV1}/one_air-conditioner_start_end_time_update`,
    barnLoranodeDatetimeUpdate: `${APIV1}/barn_lora_node_datetime_update`,
    nodeAddrByBarnNo: `${APIV1}/node_address_by_barn_no`,
    airconOnOffAllOneKey: `${APIV1}/air-conditioner_on_off_all_one_key`,
    airConControlItems: `${APIV1}/air-conditioner_control_items`,
    electricPowerItems: `${APIV1}/electric_power_control_items`,

  },
}
