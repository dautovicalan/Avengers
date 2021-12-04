import React from 'react'
import {Modal, Button} from 'react-bootstrap';

const ModalWindow = ({show, handleClose, data}) => {
    return (
        <>
      <Modal show={show} onHide={handleClose} className="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.about}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default ModalWindow
