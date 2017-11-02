import React from 'react'
import PropTypes from 'prop-types'
import { Button, Popconfirm, message, TimePicker } from 'antd'
import moment from 'moment'

import styles from './airconUpdateOneStartEndTime.less'
import { routerRedux, Link} from 'dva/router'
import pathToRegexp from 'path-to-regexp'


function AirconUpdateOneStartEndTime ({ dispatch, nodeAddr }) {


  class TimePickerAddonDemo extends React.Component {
    state = { open: false };

    handleOpenChange = (open) => {
      this.setState({ open });
    }

    handleClose = () => this.setState({ open: false })

    render() {
      return (
        <TimePicker
          open={this.state.open}
          onOpenChange={this.handleOpenChange}
          addon={() => (
            <Button size="small" type="primary" onClick={this.handleClose}>
              Ok
            </Button>
          )}
        />
      );
    }
  }


  const timePickerProps = {

    format: 'HH:mm',
    defaultValue: moment('08:00', format),

    onClick () {
      console.log('clicked ON!')
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
      console.log('取消设置!')
      message.error('取消设置！')
    },
  }



  return (
    <div className={styles.airconOnOffControl}>
      <div className={styles.inner}>
        {nodeAddr}号空调启停时间设置
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p>{nodeAddr}</p>
          <h3>{nodeAddr}号空调</h3>
        </div>
        {/*<div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />*/}
      </div>
      <div>
        <Popconfirm {...onConfirmProps}>
          <TimePicker {...timePickerProps} />

          <Button {...onButtonProps}>启动</Button>
        </Popconfirm>
      </div>
    </div>
  )
}

AirconUpdateOneStartEndTime.propTypes = {
  dispatch: PropTypes.func,

}

export default AirconUpdateOneStartEndTime
