import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CardPopup = ({ isOpen, onOpen, onClose, afterOpen, card }) => {
    let subtitle;

    return <>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpen}
            onRequestClose={onClose}
            contentLabel='Test modal'
            style={customStyles}
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