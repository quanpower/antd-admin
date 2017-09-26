import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Radio } from 'antd'
import styles from './electricControl.less'
import { routerRedux, Link} from 'dva/router'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group


function ElectricControl ({ dispatch, powerNo, content, name, title, avatar }) {
  const switchProps = {

    size: 'large',

    onChange (e) {
      console.log(`switch to ${e.target.value}`)

      dispatch({
        type: 'fireAlarm/switchElectricPower',
        payload: {
          powerSwitch: e.target.value,
          powerNo: powerNo,
        },
      })
    },
  }

  return (
    <div className={styles.electricControl}>
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
      <div>
        <RadioGroup {...switchProps} >
          <RadioButton value="1">开</RadioButton>
          <RadioButton value="0">关</RadioButton>
        </RadioGroup>
      </div>
    </div>
  )
}

ElectricControl.propTypes = {
  dispatch: PropTypes.func,

}

export default ElectricControl
