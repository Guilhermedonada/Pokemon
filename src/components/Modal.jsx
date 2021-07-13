import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/images/close.png';

import {PokemonContext} from '../contexts/PokemonContext'

const Modal = ({ children }) => {

    const {modal} = useContext(PokemonContext)
    const [showModal, setShowModal] = modal

    const closeModal = () => {
        setShowModal(false)
    }

    return(
    <div className={`modal ${showModal == true ? 'show' : ''}`}>
        <div className="modal__content">
            <img className="modal__close" src={closeIcon} alt="Fechar" onClick={closeModal}/>
            {children}
        </div>
    </div>
    )
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
