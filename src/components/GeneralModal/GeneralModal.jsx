import React, { cloneElement, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GeneralModal = ({buttonText, modalTitle, variant, modalBody}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant={variant} onClick={handleShow} className='mx-2'>
                {buttonText}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{cloneElement(modalBody, {handleClose:handleClose})}</Modal.Body>
            </Modal>
        </>
    );
}

export default GeneralModal;