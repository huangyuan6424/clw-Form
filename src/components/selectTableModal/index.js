import { React, useState } from 'react';
import { Input, Modal } from 'antd';
import TableModal from './TableModal';

export default function SelectTableModal({ onChange }) {
  //勾选的列表数据
  const [checkedList, setCheckedList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('object');
    setIsModalOpen(true);
  };
  const getList = (list) => {
    console.log('list', list);
    setCheckedList(list);
  };
  return (
    <>
      <div>
        <Input
          style={{ width: 210 }}
          placeholder={'请输入'}
          onClick={openModal}
        />
      </div>
      <Modal
        title={'选择信息'}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
          onChange && onChange(checkedList);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <TableModal callBack={getList} />
      </Modal>
    </>
  );
}
