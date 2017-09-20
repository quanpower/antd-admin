import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Switch } from 'antd'
import styles from './electricControl.less'
import { routerRedux, Link} from 'dva/router'
import pathToRegexp from 'path-to-regexp'

function ElectricControl ({ fireAlarm, dispatch, loading, location }) {
  const switchProps = {
    defaultChecked: true,
    // checked: true,

    onChange (data) {
      console.log('data in router:', data)

      const match = pathToRegexp('/fire_alarm/:powerNo').exec(location.pathname)

      if (match) {
        console.log('---in router---')
        console.log('match', match)

        let powerNo = match[1]

        dispatch({
          type: 'fireAlarm/switchElectricPower',
          payload: {
            powerSwitch: data,
            powerNo: powerNo,
          },
        })

      }
      else {
        console.log('we are at:', location.pathname)
      }

    },
  }

  return (
    <div>
      <Switch {...switchProps} checkedChildren="开" unCheckedChildren="关" />
    </div>
  )
}

ElectricControl.propTypes = {

}

export default ElectricControl
