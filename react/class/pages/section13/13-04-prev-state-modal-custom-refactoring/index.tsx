import React from 'react';
import { Button, Modal, Space } from 'antd';
import { useState } from "react";

import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export default function ModalAlertPage() {

    const [isOpen, setIsOpen] = useState(false);

    const onTogglModal = (): void => {
        setIsOpen((prev)=> !prev );
    }
    //독스에서 알려줌
    const handleCompolet = (data: Address): void => {
        console.log(data);
        onTogglModal();
    }

    //중요도에따라서 모달을 숨기는방법 삭제하는방법을 적절하게 사용해야함

    return (
        <div>
            <button onClick={onTogglModal}>모달창 열기!</button>

            {/* 모달종류방식 -1 모달숨기는 방법 */}
            {/* <Modal
                title="모달 제목"
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCancle}>
                비밀번호 입력: <input type="password" />
                <DaumPostcodeEmbed onComplete={handleCompolet} />
            </Modal> */}

            {/* 모달 종료 방식 모달 삭제하는 방법 */}
            {
                //삭제했다 새로만들었다함
                /*조건부 렌더링*/
                //Is isOpen이 True면~
                isOpen && (
                    <Modal
                        title="모달 제목"
                        open={true}
                        onOk={onTogglModal}
                        onCancel={onTogglModal}>
                        비밀번호 입력: <input type="password" />
                        <DaumPostcodeEmbed onComplete={handleCompolet} />
                    </Modal>
                )
            }

        </div>

    );

}