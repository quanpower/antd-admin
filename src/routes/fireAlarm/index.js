import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Card, Row, Col, Cascader, Card } from 'antd'
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
  const { airConControlItems, barnsOptions, barnNo } = fireAlarm

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
        type: 'fireAlarm/fetchFireAlarmItems',
        payload: {
          barnNo: value[1],
        },
      })
    }

  }

  return (
    <div>
      <Row gutter={24}>

        <Col lg={12} md={24}>
          <Row gutter={24}>
            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.power1}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.green,
                    }}
              >
                <ElectricControl dispatch={dispatch} powerNo={1} content={'1号配电箱开关控制'} name={'1'} title={'1号配电箱'} avatar={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506180316165&di=f56b4ef5671e23987359bc9b6f00dbb3&imgtype=0&src=http%3A%2F%2Fwww.dgjs123.com%2Fd%2Ffile%2F2015-05%2F124608p0eg0m07mz00ed7d.jpg'}/>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={12} md={24}>
          <Row gutter={24}>
            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.power2}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.blue,
                    }}
              >
                <ElectricControl dispatch={dispatch} powerNo={2} content={'2号配电箱开关控制'} name={'2'} title={'2号配电箱'} avatar={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506180316165&di=f56b4ef5671e23987359bc9b6f00dbb3&imgtype=0&src=http%3A%2F%2Fwww.dgjs123.com%2Fd%2Ffile%2F2015-05%2F124608p0eg0m07mz00ed7d.jpg'}/>
              </Card>
            </Col>
          </Row>
        </Col>

      </Row>
    </div>
  )
}


FireAlarm.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(({ fireAlarm, loading }) => ({ fireAlarm, loading }))(FireAlarm)
