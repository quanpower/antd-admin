import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import styles from './airconControlManual.less'
import AirconOnOffControl from './airconOnOffControl'
import AirconOnOffAllOneKey from './airconOnOffAllOneKey'


function AirconControlManual ({ data, location, dispatch }) {

  const status1={'color':'green', 'text':'运行中', 'current_value':7}
  const status2={'color':'red', 'text':'已停止', 'current_value':0}


  return (
    <div>

      <Card bordered={false}
            className={styles.power1}
            bodyStyle={{
              padding: 0,
              height: 100,
              background: color.sky,
            }}
      >
        <AirconOnOffAllOneKey dispatch={dispatch} barnNo={1} />
      </Card>


      <Row gutter={24}>

        <Col lg={12} md={24}>
          <Row gutter={24}>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.power1}
                    bodyStyle={{
                      padding: 0,
                      height: 240,
                      background: color.green,
                    }}
              >
                <AirconOnOffControl location={location} dispatch={dispatch} nodeAddr={1} content={'1号空调开关控制'} name={'1'} title={'1号空调'} avatar={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506181543644&di=36ab98904965175769fb54fbd316cbe1&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20150207%2Fm600%2F562A7CBD05C2B187842FC10B831015B0.jpeg'} onoff_status={status1} />
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={12} md={24}>
          <Row gutter={24}>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.power1}
                    bodyStyle={{
                      padding: 0,
                      height: 240,
                      background: color.blue,
                    }}
              >
                <AirconOnOffControl location={location} dispatch={dispatch} nodeAddr={2} content={'2号空调开关控制'} name={'2'} title={'2号空调'} avatar={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506181543644&di=36ab98904965175769fb54fbd316cbe1&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20150207%2Fm600%2F562A7CBD05C2B187842FC10B831015B0.jpeg'} onoff_status={status1} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>


      <Row gutter={24}>

        <Col lg={12} md={24}>
          <Row gutter={24}>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.power1}
                    bodyStyle={{
                      padding: 0,
                      height: 240,
                      background: color.purple,
                    }}
              >
                <AirconOnOffControl location={location} dispatch={dispatch} nodeAddr={3} content={'3号空调开关控制'} name={'3'} title={'3号空调'} avatar={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506181543644&di=36ab98904965175769fb54fbd316cbe1&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20150207%2Fm600%2F562A7CBD05C2B187842FC10B831015B0.jpeg'} onoff_status={status2} />
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={12} md={24}>
          <Row gutter={24}>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.power1}
                    bodyStyle={{
                      padding: 0,
                      height: 240,
                      background: color.red,
                    }}
              >
                <AirconOnOffControl location={location} dispatch={dispatch} nodeAddr={4} content={'4号空调开关控制'} name={'4'} title={'4号空调'} avatar={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506181543644&di=36ab98904965175769fb54fbd316cbe1&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20150207%2Fm600%2F562A7CBD05C2B187842FC10B831015B0.jpeg'} onoff_status={status2} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

AirconControlManual.propTypes = {
  dispatch: PropTypes.func,
}

export default AirconControlManual
