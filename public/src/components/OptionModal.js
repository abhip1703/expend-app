import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelection}
    closeTimeoutMS={200}
    className="modal"
    contentLabel="Selected Option"
    >
    <h3 className="modal__title">
        Selected Option
    </h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelection}>Okay</button>
    </Modal>
);

export default OptionModal;