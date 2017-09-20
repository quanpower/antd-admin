import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Switch, Icon } from 'antd'
import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function FireAlarm ({ fireAlarm, dispatch, loading }) {
  const switchProps = {
    defaultChecked: false,
    // checked: true,

    onChange (data) {
      console.log('data in router:', data)
      dispatch({
        type: 'fireAlarm/switchElectricPower',
        payload: {
          powerswitch: data,
        },
      })
      console.log('switchElectricPower')
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
