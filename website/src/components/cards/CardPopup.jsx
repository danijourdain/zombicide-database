import Modal from 'react-modal';
import styles from './CardPopup.module.css';

const CardPopup = ({ isOpen, onOpen, onClose, afterOpen, card }) => {
    let subtitle;

    return <>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal 
            appElement={document.getElementById('root')}
            isOpen={isOpen}
            onAfterOpen={afterOpen}
            onRequestClose={onClose}
            contentLabel='Test modal'
            className={styles['popup-content']}
            overlayClassName={styles['popup-overlay']}
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={onClose}>close</button>
            <div>I am a modal</div>
            <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
            </form>
        </Modal>
    </>
}

export default CardPopup;