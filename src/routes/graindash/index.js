import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Card, Select, message } from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import { AirConDashboard, Unmanned, DynamicLinkage, FireAlarm, RealtimeTemp, Security, SmartTempCtrl } from './components'
import styles from './index.less'
import dashboard from "../../models/dashboard";
import pathToRegexp from 'path-to-regexp'


const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function GrainDash ({ graindash, location, dispatch }) {
  const { barnNo, airConDash, unmanned, dynamiclinkage, firealarm, realtimetemp, security, smarttempctrl } = graindash
  console.log('airConDash is: ', airConDash)
  console.log('--****-barnNo is: ---****--', barnNo)
  // const match = pathToRegexp('/grain_dashboard/:barnNo').exec(location.pathname)
  //
  // console.log('---in graindash router---')
  // console.log('match', match)
  //
  // if (location.pathname === '/login') {
  //   yield put(routerRedux.push({
  //     pathname: '/dashboard',
  //   }))
  // }


  const { Option, OptGroup } = Select

  const onSelectProps = {

    onChange (value) {
      console.log('选中仓号是：', value)
      message.success('筛选成功！')

      dispatch({
        type: 'graindash/fetchBarnNo',
        payload: {
          gatewayAddr: '1',
          barnNo: value,
        },
      })
    },
  }


  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} />*/}

      <Row gutter={24}>

        <Col lg={12} md={24}>

          <Card bordered={false}
                bodyStyle={{
                  padding: '24px 36px 24px 0',
                }}
          >
            <Select {...onSelectProps} defaultValue='1' style={{ width: 120 }} >
              <OptGroup label="平房仓">
                <Option value="1">1</Option>
                <Option value="2">2</Option>

                <Option value="3">3</Option>
                <Option value="4">4</Option>

                <Option value="5">5</Option>
                <Option value="6">6</Option>

                <Option value="7">7</Option>
                <Option value="8">8</Option>
              </OptGroup>

            </Select>

          </Card>

          <Card bordered={false}
                bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
          >
            <AirConDashboard data={airConDash} />
          </Card>
        </Col>

        <Col lg={6} md={24}>
          <Row gutter={24}>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.purple,
                    }}
              >
                <SmartTempCtrl {...smarttempctrl} barnNo={barnNo} />
              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.green,
                    }}
              >
                <RealtimeTemp {...realtimetemp} barnNo={barnNo} />
              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.red,
                    }}
              >
                <FireAlarm {...firealarm} barnNo={barnNo} />
              </Card>
            </Col>

          </Row>
        </Col>

        <Col lg={6} md={24}>
          <Row gutter={24}>
            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.weather}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.blue,
                    }}
              >
                <Unmanned {...unmanned} barnNo={barnNo} />

              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.peach,
                    }}
              >
                <DynamicLinkage {...dynamiclinkage} barnNo={barnNo} />
              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.yellow,
                    }}
              >
                <Security {...security} barnNo={barnNo} />
              </Card>
            </Col>

          </Row>
        </Col>

      </Row>
    </div>
  )
}

GrainDash.propTypes = {
  graindash: PropTypes.object,
}

export default connect(({ graindash}) => ({ graindash }))(GrainDash)
