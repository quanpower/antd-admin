import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Switch, Icon } from 'antd'
import styles from './index.less'
import pathToRegexp from 'path-to-regexp'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function FireAlarm ({ fireAlarm, dispatch, loading, location }) {
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


FireAlarm.propTypes = {
  fireAlarm: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ fireAlarm, loading }) => ({ fireAlarm, loading }))(FireAlarm)
