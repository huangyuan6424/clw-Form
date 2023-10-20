import React from 'react';
import {
  Form,
  Input,
  Radio,
  Checkbox,
  Space,
  Button,
  Switch,
  DatePicker,
} from 'antd';
import { useState, useEffect } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectTableModal from '../../components/selectTableModal';
import './index.less';

export default function FormTest() {
  const [form1] = Form.useForm();
  const [checkedValue, setCheckedValue] = useState([]);
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  //多选全选
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    // form1.setFieldValue('fruits', e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  //多选的单个选择
  const onChange = (list) => {
    // console.log('list', list);
    setCheckedList(list);
    // form1.setFieldValue('fruits', list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  //开关
  const onChangeSwitch = (checked) => {
    console.log('switch', checked);
  };
  //日期
  const onDateChange = (date, dateString) => {
    console.log('date, dateString', date, dateString);
  };
  //打开Modal
  const openModal = () => {};
  // useEffect(() => {
  //   console.log('checkedList',checkedList);
  // },[checkedList])

  return (
    <div className="from-content">
      <span className="title">信息收集表</span>
      <Form
        form={form1}
        onValuesChange={(changedValues, allValues) => {
          console.log('changedValues, allValues', changedValues, allValues);
        }}
        initialValues={{
          fruits: defaultCheckedList,
        }}
        onFinish={(values) => {
          const newValues = {
            ...values,
            fruits: checkedList,
          };

          console.log('onfinishva', values);
        }}
      >
        <Form.Item label={'姓名'} name={'name'}>
          <Input style={{ width: 210 }} placeholder={'请输入'} />
        </Form.Item>
        <Form.Item label={'籍贯'} name={'radioNative'}>
          <Radio.Group>
            <Radio value={1}>北京</Radio>
            <Radio value={2}>四川</Radio>
            <Radio value={3}>上海</Radio>
            <Radio value={4}>深圳</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item noStyle>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            全选
          </Checkbox>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label={'家属姓名'}
          name="users"
          style={{ marginTop: '20px' }}
        >
          <Form.List name="users">
            {(fields, { add, remove }) => {
              console.log('fields', fields);
              return (
                <>
                  {fields.map(({ key, name, ...restField }) => {
                    return (
                      <Space
                        key={key}
                        style={{
                          display: 'flex',
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        {/* first name */}
                        <Form.Item
                          {...restField}
                          name={[name, 'first']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing first name',
                            },
                          ]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>
                        {/* last name */}
                        <Form.Item
                          {...restField}
                          name={[name, 'last']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing last name',
                            },
                          ]}
                        >
                          <Input placeholder="Last Name" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    );
                  })}
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    添加
                  </Button>
                </>
              );
            }}
          </Form.List>
        </Form.Item>
        <Form.Item label={'是否确认信息'} name="switchName">
          <Switch defaultChecked onChange={onChangeSwitch} />
        </Form.Item>
        <Form.Item>
          <Form.Item label={'出生年月'} name="datePicher">
            <DatePicker onChange={onDateChange} />
          </Form.Item>
          <Form.Item label={'朋友信息'} name="tableMsg">
            <SelectTableModal />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
