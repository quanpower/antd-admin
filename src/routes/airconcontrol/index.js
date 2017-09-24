import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'
import { AirconControlAutomatic, AirconControlManual } from './components'

const AirConControl = ({ location, dispatch, airconcontrol, loading }) => {
  const { list, pagination, currentItem, modalVisible, modalType, isMotion, selectedRowKeys } = airconcontrol
  const { pageSize } = pagination

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['user/update'],
    title: `${modalType === 'create' ? '空调远程控制' : 'Update User'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        // type: `airconcontrol/${modalType}`,
        type: `airconcontrol/create`,
        payload: data,
      })
      console.log('airconcontrol')
    },
    onCancel () {
      dispatch({
        type: 'airconcontrol/hideModal',
      })
      console.log('airconcontrol Cancel')

    },
  }



  const filterProps = {
    isMotion,
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          page: 1,
          pageSize,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/user',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/user',
      }))
    },
    onAdd () {
      dispatch({
        type: 'airconcontrol/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
    switchIsMotion () {
      dispatch({ type: 'airconcontrol/switchIsMotion' })
    },
  }


  return (
    <div className="content-inner">
      <Filter {...filterProps} />

      <Modal {...modalProps} />

      <AirconControlManual />
      {/*<AirconControlAutomatic />*/}

    </div>
  )
}

AirConControl.propTypes = {
  airconcontrol: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ airconcontrol, loading }) => ({ airconcontrol, loading }))(AirConControl)
