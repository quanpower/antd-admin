import React from 'react'
import PropTypes from 'prop-types'
import city from '../../utils/city'


import {Form, Select, Input, InputNumber, Switch, Radio, Modal, Slider, Button, Upload, Icon} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      data.address = data.address.join(' ')
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">

        <FormItem
          {...formItemLayout}
          label="空调型号"
        >
          <span className="ant-form-text">658</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="网关地址"
        >
          <span className="ant-form-text">0001</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="节点地址"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: '请选择节点地址!' },
            ],
          })(
            <Select placeholder="请选择节点地址">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="风向"
        >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="1">手动</RadioButton>
              <RadioButton value="2">自动</RadioButton>
            </RadioGroup>
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="风速"
        >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="1">1</RadioButton>
              <RadioButton value="2">2</RadioButton>
              <RadioButton value="3">3</RadioButton>
              <RadioButton value="4">4</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="工作模式"
        >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="1">制冷</RadioButton>
              <RadioButton value="2">制热</RadioButton>
              <RadioButton value="3">干燥</RadioButton>
              <RadioButton value="4">加湿</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="温度"
        >
          {getFieldDecorator('input-number', { initialValue: 28 })(
            <InputNumber min={18} max={32} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="开关"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch />
          )}
        </FormItem>

      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
