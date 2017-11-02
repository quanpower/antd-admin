import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'

import { AirconUpdateStartEndTime } from './components'

const AirConStartEndTime = ({ location, dispatch, airconStartEndTime, loading }) => {
  const { list, pagination, currentItem, modalVisible, modalType, isMotion, selectedRowKeys } = airconStartEndTime


  return (
    <div className="content-inner">

      <AirconUpdateStartEndTime dispatch={dispatch} location={location} />
      {/*<AirconControlAutomatic />*/}

    </div>
  )
}

AirConStartEndTime.propTypes = {
  airconStartEndTime: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ airconStartEndTime, loading }) => ({ airconStartEndTime, loading }))(AirConStartEndTime)
