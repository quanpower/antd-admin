import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Switch } from 'antd'
import styles from './airconOnOffControl.less'
import { routerRedux, Link} from 'dva/router'
import pathToRegexp from 'path-to-regexp'

function AirconOnOffControl ({ dispatch, nodeAddr, content, name, title, avatar }) {


  const switchProps = {
    defaultChecked: true,
    // checked: true,
    checkedChildren: '开',
    unCheckedChildren: '关',
    size: 'large',
    onChange (checked) {
      console.log('data in router:', checked)
      console.log(`switch to ${checked}`)

      dispatch({
        type: 'fireAlarm/switchElectricPower',
        payload: {
          airconSwitch: checked,
          nodeAddr: nodeAddr,
        },
      })
    },
  }

  return (
    <div className={styles.airconOnOffControl}>
      <div className={styles.inner}>
        {content}
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p>{name}</p>
          <h3>{title}</h3>
        </div>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Switch {...switchProps} />
      </div>
    </div>
  )
}

AirconOnOffControl.propTypes = {
  dispatch: PropTypes.func,

}

export default AirconOnOffControl
