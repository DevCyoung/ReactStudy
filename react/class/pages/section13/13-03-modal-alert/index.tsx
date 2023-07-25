import React from 'react';
import { Button, Modal, Space } from 'antd';


export default function ModalAlertPage() {

    const onClickSuccess = (): void => {
        Modal.success({
          content: 'some messages...some messages...',
        });
      };

      const error = (): void => {
        Modal.error({
          title: 'This is an error message',
          content: "비밀번호가 틀렸습니다!",         
        });
      };


    return (
        <div>
            <button onClick={onClickSuccess}> 성공했을때! </button >
            <button onClick={error}> 실패했을때! </button >
        </div>
    )

}