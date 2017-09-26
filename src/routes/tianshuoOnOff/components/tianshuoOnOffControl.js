import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Radio } from 'antd'
import styles from './tianshuoOnOffControl.less'
import { routerRedux, Link} from 'dva/router'


const RadioButton = Radio.Button
const RadioGroup = Radio.Group

function OnOffControl ({ dispatch, tianshuoNo, content, name, title, avatar }) {
  const switchProps = {
    size: 'large',

    onChange (e) {

      console.log(`switch to ${e.target.value}`)

      dispatch({
        type: 'tianshuoOnOff/updateTianshuoOnOff',
        payload: {
          tianshuoSwitch: e.target.value,
          tianshuoNo: tianshuoNo,
        },
      })
    },
  }

  return (
    <div className={styles.tianshuoOnOffControl}>
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

OnOffControl.propTypes = {
  dispatch: PropTypes.func,

}

export default OnOffControl
