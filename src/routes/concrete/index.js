import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import { ConcTemperature } from './components'
import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function ConcTemps ({ concrete }) {
  const { concTemps } = concrete

  console.log('aaaaa are :', concTemps)
  const concCards = concTemps.map((item, key) => (<Col key={key} lg={6} md={12}>
    <ConcTemperature {...item} />
  </Col>))
  console.log('cards are :', concCards)
  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} />*/}
      <Row gutter={24}>
        {concCards}
      </Row>
    </div>
  )
}

ConcTemps.propTypes = {
  grain: PropTypes.object,
}

export default connect(({ concrete }) => ({ concrete }))(ConcTemps)
