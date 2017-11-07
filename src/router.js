import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from 'routes/app'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [
    {
      path: '/dashboard',
      models: () => [import('./models/dashboard')],
      component: () => import('./routes/dashboard/'),
    }, {
      path: '/user',
      models: () => [import('./models/user')],
      component: () => import('./routes/user/'),
    }, {
      path: '/user/:id',
      models: () => [import('./models/user/detail')],
      component: () => import('./routes/user/detail/'),
    }, {
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./routes/login/'),
    }, {
      path: '/request',
      component: () => import('./routes/request/'),
    }, {
      path: '/UIElement/iconfont',
      component: () => import('./routes/UIElement/iconfont/'),
    }, {
      path: '/UIElement/search',
      component: () => import('./routes/UIElement/search/'),
    }, {
      path: '/UIElement/dropOption',
      component: () => import('./routes/UIElement/dropOption/'),
    }, {
      path: '/UIElement/layer',
      component: () => import('./routes/UIElement/layer/'),
    }, {
      path: '/UIElement/dataTable',
      component: () => import('./routes/UIElement/dataTable/'),
    }, {
      path: '/UIElement/editor',
      component: () => import('./routes/UIElement/editor/'),
    }, {
      path: '/chart/ECharts',
      component: () => import('./routes/chart/ECharts/'),
    }, {
      path: '/chart/highCharts',
      component: () => import('./routes/chart/highCharts/'),
    }, {
      path: '/chart/Recharts',
      component: () => import('./routes/chart/Recharts/'),
    }, {
      path: '/grain',
      models: () => [import('./models/grain')],
      component: () => import('./routes/grain/'),
    }, {
      path: '/grain_dashboard/:barnNo',
      models: () => [import('./models/graindash')],
      component: () => import('./routes/graindash/'),
    }, {
      path: '/grain_history',
      models: () => [import('./models/grainhistory')],
      component: () => import('./routes/grainhistory/'),
    },  {
      path: '/aircondetail/:nodeNo',
      models: () => [import('./models/aircondetail')],
      component: () => import('./routes/aircondetail/'),
    }, {
      path: '/aircon_control',
      models: () => [import('./models/airconcontrol')],
      component: () => import('./routes/airconcontrol/'),
    }, {
      path: '/fire_alarm/:powerNo',
      models: () => [import('./models/fireAlarm')],
      component: () => import('./routes/fireAlarm/'),
    }, {
      path: '/tianshuo_on_off',
      models: () => [import('./models/tianshuoOnOff')],
      component: () => import('./routes/tianshuoOnOff/'),
    }, {
      path: '/setting/airconditoner_setting/start_end_time/:barnNo',
      models: () => [import('./models/airconStartEndTime')],
      component: () => import('./routes/airconStartEndTime/'),
    }, {
      path: '/setting/airconditoner_setting/tianshuo_setting/:barnNo',
      models: () => [import('./models/tianshuoSetting')],
      component: () => import('./routes/tianshuoSetting/'),
    },
  ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/grain" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
          <Route component={error} />
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers


