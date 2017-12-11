import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Card, Row, Col, Cascader } from 'antd'
import { color } from 'utils'
import styles from './index.less'
import { ElectricControl } from './components'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}


function FireAlarm ({ fireAlarm, dispatch }) {
  const { electricPowerItems, barnsOptions, barnNo } = fireAlarm

  const cascaderProps = {

    size: 'large',
    defaultValue: ['1', '1'],
    options: barnsOptions,

    onChange (value) {
      console.log('------select value is:--------')
      console.log(value)

      dispatch({
        type: 'fireAlarm/fetchGatewayAddr',
        payload: {
          gatewayAddr: value[0],
        },
      })

      dispatch({
        type: 'fireAlarm/fetchBarnNo',
        payload: {
          barnNo: value[1],
        },
      })

      dispatch({
        type: 'fireAlarm/fetchElectricPowerItems',
        payload: {
          barnNo: value[1],
        },
      })
    }
  }



  const electricPowerOnOffItems = electricPowerItems.map((item, key) => (

    <Col lg={12} md={24}>
      <Row gutter={24}>
        <Col key={key} lg={24} md={12}>
          <Card bordered={false}
            className={styles.power1}
            bodyStyle={{
              padding: 0,
              height: 240,
              background: color.green,
            }}
          >
            <ElectricControl {...item} dispatch={dispatch} />
          </Card>
        </Col>
      </Row>
    </Col>

  ))

  return (
    <div>
      <Row gutter={24}>

        <Card bordered={false} bodyStyle={{ padding: '24px 36px 24px 0', }}>
          <Cascader {...cascaderProps} />
        </Card>

        { electricPowerOnOffItems }

      </Row>
    </div>
  )
}


FireAlarm.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(({ fireAlarm, loading }) => ({ fireAlarm, loading }))(FireAlarm)
