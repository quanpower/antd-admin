import React from 'react'
import PropTypes from 'prop-types'
import { Button, Popconfirm, message, InputNumber } from 'antd'
import styles from './airconOnOffControl.less'
import { routerRedux, Link} from 'dva/router'
import pathToRegexp from 'path-to-regexp'


function AirconOnOffControl ({ dispatch, nodeAddr, content, name, title, avatar }) {

  const switchProps = {

    size: 'large',
    onChange (e) {
      console.log(`switch to ${e.target.value}`)

      dispatch({
        type: 'airconcontrol/airconOnOff',
        payload: {
          airconSwitch: e.target.value,
          nodeAddr: nodeAddr,
        },
      })
    },
  }

  const onButtonProps = {
    type: 'primary',
    size: 'large',
    icon: 'poweroff',

    onClick () {
      console.log('clicked ON!')
    },
  }

  const offButtonProps = {
    type: 'danger',
    size: 'large',
    icon: 'poweroff',

    onClick () {
      console.log('clicked OFF!')
    },
  }


  const onConfirmProps = {
    title: '确定提交操作？',
    okText: '确定',
    cancelText: '取消',

    onConfirm () {
      console.log('确定启动!')
      message.success('启动成功！')

      dispatch({
        type: 'airconcontrol/airconOnOff',
        payload: {
          airconSwitch: '1',
          nodeAddr: nodeAddr,
        },
      })

    },

    onCancel () {
      console.log('取消启动!')
      message.error('取消启动！')
    },
  }



  const offConfirmProps = {
    title: '确定提交操作？',
    okText: '确定',
    cancelText: '取消',

    onConfirm () {
      console.log('确定关闭!')
      message.success('关闭成功！')

      dispatch({
        type: 'airconcontrol/airconOnOff',
        payload: {
          airconSwitch: '0',
          nodeAddr: nodeAddr,
        },
      })
    },

    onCancel () {
      console.log('取消提交!')
      message.error('取消关闭！')
    },

  }

  const inputNumberProps = {
    min: 0,
    max: 24,
    step: 0.1,
    size: 'large',
    onChange (value) {
      console.log(`delay ${value} hours to poweroff`)

      dispatch({
        type: 'airconcontrol/updateLoraNode',
        payload: {
          timeDelta: value,
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
      <div>
        <Popconfirm {...onConfirmProps}>
          <Button {...onButtonProps}>启动</Button>
        </Popconfirm>
        <InputNumber {...inputNumberProps} />
        <Popconfirm {...offConfirmProps}>
          <Button {...offButtonProps}>关闭</Button>
        </Popconfirm>
      </div>
    </div>
  )
}

AirconOnOffControl.propTypes = {
  dispatch: PropTypes.func,

}

export default AirconOnOffControl
