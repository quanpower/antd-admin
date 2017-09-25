import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Switch } from 'antd'
import styles from './tianshuoOnOffControl.less'
import { routerRedux, Link} from 'dva/router'

function OnOffControl ({ dispatch, tianshuoNo, content, name, title, avatar }) {
  const switchProps = {
    defaultChecked: true,
    // checked: true,
    checkedChildren: '开',
    unCheckedChildren: '关',

    onChange (checked) {
      console.log(`switch to ${checked}`)

      dispatch({
        type: 'tianshuoOnOff/updateTianshuoOnOff',
        payload: {
          tianshuoSwitch: checked,
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
      <div className={styles.switch}>
        <Switch {...switchProps} />
      </div>
    </div>
  )
}

OnOffControl.propTypes = {
  dispatch: PropTypes.func,

}

export default OnOffControl
