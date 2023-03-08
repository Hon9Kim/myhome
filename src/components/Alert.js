import { Modal, Button, Badge } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Profile from './Profile';
import Projects from './Projects';
import { useState, useRef } from 'react';

function Alert() {
    const test = 0;
    const navigate = useNavigate();

    const [show, setShow] = useState(true);

    const handleClose = () => {
        //alert('죄송합니다 기능이 없습니다.')
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal backdrop="static" keyboard={false} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>반갑습니다</Modal.Title>
                </Modal.Header>
                <Modal.Body>안녕하세요 프론트엔드 개발자 김홍입니다. <br /> 제 소개를 들어보시겠어요?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Alert