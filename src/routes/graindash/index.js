import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
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

function GrainDash ({ graindash, location }) {
  const { airConDash, unmanned, dynamiclinkage, firealarm, realtimetemp, security, smarttempctrl } = graindash
  console.log('airConDash is: ', airConDash)
  const match = pathToRegexp('/grain_dashboard/:barnNo').exec(location.pathname)

  console.log('---in graindash router---')
  console.log('match', match)

  let barnNo = match[1]

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
                <Unmanned {...anmanned} />

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
                <DynamicLinkage {...dynamiclinkage} />
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
                <Security {...security} />
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
