import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Card, Select, message, Cascader} from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import { AirConDashboard, AirconBlockItem } from './components'
import styles from './index.less'
import pathToRegexp from 'path-to-regexp'


const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function GrainDash ({ graindash, location, dispatch }) {
  const {  barnNo, barnsOptions, airConDash, airconBlockItems } = graindash
  console.log('airConDash is: ', airConDash)
  console.log('--****-barnNo is: ---****--', barnNo)

  console.log('--****-airconBlockItems is: ---****--', airconBlockItems)


  const cascaderProps = {

    size: 'large',
    defaultValue: ['1', '1'],
    options: barnsOptions,

    onChange (value) {
      console.log('------select value is:--------')
      console.log(value)
      const barn_no = value[1]
      dispatch(routerRedux.push(`/grain_dashboard/${barn_no}`))

    }
  }


  const itemsCards = airconBlockItems.map((item, key) => (
        <Col lg={6} md={24}>
          <Row gutter={24}>

          
            {console.log('---in itemsCards----')}
            {console.log('---item----', item)}


            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.purple,
                    }}
              >
                <AirconBlockItem {...item} />

              </Card>
            </Col>
          </Row>
        </Col>

  ))

  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} /> purple,green, red,blue,peach,yellow */}
      <Row gutter={24}>
        <Col lg={12} md={24}>
          <Card bordered={false} bodyStyle={{ padding: '24px 36px 24px 0', }}>
            <Cascader {...cascaderProps} />
          </Card>
          <Card bordered={false}
                bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
          >
            <AirConDashboard data={airConDash} />
          </Card>
        </Col>

        {itemsCards}

      </Row>
    </div>
  )
}

GrainDash.propTypes = {
  graindash: PropTypes.object,
}

export default connect(({ graindash }) => ({ graindash }))(GrainDash)
