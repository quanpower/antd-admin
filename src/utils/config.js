const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'SmartLink Admin  © 2017 smartlinkcloud',
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
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    loraTemperature: `${APIV2}/loranode_temperature`,
    loraTemperatures: `${APIV2}/loranode_temperatures`,
    loraTemperatureRecord: `${APIV2}/loranode_temperature_record`,

    loraBat: `${APIV2}/loranode_battery`,
    barns: `${APIV2}/barns`,

    concTemp: `${APIV2}/concrete_temperature`,
    concTemps: `${APIV2}/concrete_temperatures`,
    concTempRecord: `${APIV2}/concrete_temperature_record`,

    concDashboard: `${APIV2}/concrete_dashboard`,



  },
}
