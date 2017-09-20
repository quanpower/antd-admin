import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Card, Row, Col } from 'antd'
import styles from './index.less'
import pathToRegexp from 'path-to-regexp'
import { ElectricControl } from './components'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function FireAlarm ({ fireAlarm, dispatch, loading, location }) {

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
            <ElectricControl location={location} dispatch={dispatch} />
          </Card>
        </Col>

        <Col lg={12} md={24}>
          <Card bordered={false}
                bodyStyle={{
                  padding: '24px 36px 24px 0',
                }}
          >
            <ElectricControl location={location} dispatch={dispatch} />
          </Card>
        </Col>

      </Row>
    </div>
  )
}


FireAlarm.propTypes = {
  fireAlarm: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ fireAlarm, loading }) => ({ fireAlarm, loading }))(FireAlarm)
